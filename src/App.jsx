import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import NoteCard from './components/NoteCard'
import NoteModal from './components/NoteModal'
import { loadNotesInitial, saveNotes } from './utils/storage'
import dayjs from 'dayjs'

export default function App(){
  const [notes, setNotes] = useState([])
  const [filter, setFilter] = useState('All Notes')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const initial = loadNotesInitial()
    setNotes(initial)
  },[])

  useEffect(() => {
    saveNotes(notes)
  },[notes])

  const categories = ['All Notes', ...Array.from(new Set(notes.map(n=>n.category)))]

  function handleCreate(note){
    // conflict handling: duplicate title within same category -> append (1), (2)
    const same = notes.filter(n=>n.category===note.category && n.title.startsWith(note.title))
    if(same.some(n=>n.title === note.title)){
      const next = same.length + 1
      note.title = `${note.title} (${next})`
    }
    note.id = Date.now()
    note.createdAt = dayjs().toISOString()
    setNotes([note, ...notes])
  }

  function handleUpdate(updated){
    setNotes(notes.map(n=> n.id === updated.id ? {...updated} : n))
  }

  function handleDelete(id){
    if(!confirm('Delete this note? This action cannot be undone.')) return
    setNotes(notes.filter(n=> n.id !== id))
  }

  const visible = notes.filter(n=>{
    if(filter !== 'All Notes' && n.category !== filter) return false
    if(query && !(`${n.title} ${n.description}`.toLowerCase().includes(query.toLowerCase()))) return false
    return true
  })

  return (
    <div className="app">
      <Sidebar 
        categories={categories} 
        active={filter} 
        onSelect={setFilter}
        onAdd={()=>{ setEditing(null); setModalOpen(true) }}
        query={query}
        setQuery={setQuery}
      />
      <main className="main">
        <header className="main-header">
          <h2>{filter}</h2>
          <div>
            <button className="btn" onClick={()=>{ setEditing(null); setModalOpen(true) }}>+ New Note</button>
            <button className="btn ghost" onClick={()=>{
              // export notes
              const blob = new Blob([JSON.stringify(notes, null, 2)], {type: 'application/json'})
              const url = URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url; a.download = 'notes-export.json'; a.click(); URL.revokeObjectURL(url)
            }}>Export</button>
          </div>
        </header>

        <section className="grid" aria-live="polite">
          {visible.length === 0 ? (
            <div className="empty">No notes here — try creating one.</div>
          ) : visible.map(note => (
            <NoteCard 
              key={note.id} 
              note={note} 
              onEdit={()=>{ setEditing(note); setModalOpen(true) }}
              onDelete={()=>handleDelete(note.id)}
            />
          ))}
        </section>
      </main>

      {modalOpen && (
        <NoteModal 
          onClose={()=> setModalOpen(false)} 
          onSave={(note)=>{
            if(editing) handleUpdate({...editing, ...note})
            else handleCreate(note)
            setModalOpen(false)
          }}
          initial={editing}
        />
      )}
    </div>
  )
}

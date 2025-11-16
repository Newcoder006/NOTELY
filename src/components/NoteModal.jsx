import React, { useEffect, useState } from 'react'

export default function NoteModal({onClose, onSave, initial}){
  const [title, setTitle] = useState(initial?.title || '')
  const [description, setDescription] = useState(initial?.description || '')
  const [category, setCategory] = useState(initial?.category || 'Personal')

  useEffect(()=>{
    function onKey(e){
      if(e.key === 'Escape') onClose()
      if(e.key === 's' && (e.ctrlKey || e.metaKey)){
        e.preventDefault(); handleSave()
      }
      if(e.key === 'n' && (e.ctrlKey || e.metaKey)){
        e.preventDefault(); // avoid new window
      }
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[title,description,category])

  function handleSave(){
    if(!title.trim()){
      alert('Please add a title for your note.')
      return
    }
    onSave({ title: title.trim(), description: description.trim(), category: category.trim() || 'Personal' })
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <header>
          <h2>{initial ? 'Edit note' : 'New note'}</h2>
          <button className="close" onClick={onClose} aria-label="Close">×</button>
        </header>

        <main>
          <label>Title
            <input value={title} onChange={e=>setTitle(e.target.value)} />
          </label>

          <label>Category
            <input value={category} onChange={e=>setCategory(e.target.value)} />
          </label>

          <label>Description
            <textarea value={description} onChange={e=>setDescription(e.target.value)} rows="6" />
          </label>
        </main>

        <footer>
          <button className="btn" onClick={handleSave}>{initial ? 'Save changes' : 'Create note'}</button>
          <button className="btn ghost" onClick={onClose}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

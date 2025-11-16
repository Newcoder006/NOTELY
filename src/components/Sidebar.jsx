import React from 'react'

export default function Sidebar({categories, active, onSelect, onAdd, query, setQuery}){
  return (
    <aside className="sidebar" aria-label="Notes Sidebar">
      <div className="brand">
        <h1>Notely</h1>
        <small>simple, human notes</small>
      </div>

      <div className="search">
        <input aria-label="Search notes" placeholder="Search..." value={query} onChange={e=>setQuery(e.target.value)} />
      </div>

      <nav>
        {categories.map(cat=>(
          <button 
            key={cat} 
            className={`nav-btn ${active===cat ? 'active' : ''}`} 
            onClick={()=> onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="btn wide" onClick={onAdd}>+ Add note</button>
        <small>Tip: Press <kbd>N</kbd> to create a new note</small>
      </div>
    </aside>
  )
}

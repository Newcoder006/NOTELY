import React from 'react'
import dayjs from 'dayjs'

export default function NoteCard({note, onEdit, onDelete}){
  return (
    <article className="card" tabIndex="0" onDoubleClick={onEdit} aria-labelledby={'t'+note.id}>
      <div className="card-head">
        <h3 id={'t'+note.id}>{note.title}</h3>
        <div className="meta">
          <span className="badge">{note.category}</span>
          <time title={note.createdAt}>{dayjs(note.createdAt).format('MMM D, YYYY HH:mm')}</time>
        </div>
      </div>
      <p className="desc">{note.description}</p>
      <div className="card-actions">
        <button className="link" onClick={onEdit}>Edit</button>
        <button className="link danger" onClick={onDelete}>Delete</button>
      </div>
    </article>
  )
}

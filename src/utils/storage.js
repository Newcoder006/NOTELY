const LS_KEY = 'human-notes-v1'
import notesData from '../data/notes.json'

export function loadNotesInitial(){
  try {
    const raw = localStorage.getItem(LS_KEY)
    if(raw) return JSON.parse(raw)
  } catch(e){}
  // fallback to bundled notes
  return notesData
}

export function saveNotes(notes){
  try { localStorage.setItem(LS_KEY, JSON.stringify(notes)) } catch(e){}
}

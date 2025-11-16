# Humanized Notes App (React)

A minimal, accessible, and human-feel notes app (Evernote-style MVP) built with React and vanilla CSS.
Features:
- Create / edit / delete notes (title, description, category, timestamp)
- Sidebar categories and filtering
- Responsive grid layout
- Duplicate-title handling (auto-append numbering)
- Persist data in localStorage + initial notes from `src/data/notes.json`
- Export notes as JSON
- Keyboard shortcuts (N to create, Esc to close modal, Ctrl/Cmd+S to save)
- Accessible UI with focus states and ARIA attributes

## Tech stack
- React (18)
- Vite (dev tooling)
- dayjs (date formatting)
- Vanilla CSS (simple, accessible styles)

## Setup (run locally)
1. Ensure Node.js (v16+) is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Folder structure
- `src/` - source code
  - `components/` - React components (Sidebar, NoteCard, NoteModal)
  - `data/notes.json` - initial notes
  - `utils/storage.js` - localStorage helpers
  - `styles.css` - global styles
- `index.html`, `package.json`, `vite.config.js`, `README.md`

## Notes on "humanized coding"
- Code uses small, focused components
- Intentionally readable naming and comments
- Minimal dependencies to keep project approachable

## Deployment
- This repo can be deployed to Vercel / Netlify / GitHub Pages.
- For Vercel: connect the repo and set build command `npm run build` and output directory `dist`.


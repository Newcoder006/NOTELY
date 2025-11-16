📒 Notely — A Humanized Notes Application

A minimal, clean, distraction-free notes app built using React, Vanilla CSS, and modern frontend principles.

✨ Overview

Notely is a lightweight and human-centered notes application designed to feel simple, intuitive, and personal.
It focuses on clarity, accessibility, and minimalism — without unnecessary complexity or heavy libraries.

The goal of this project is to demonstrate how a clean, functional notes system can be created using only:

React (Frontend UI)

Vite (Build Tool)

Vanilla CSS (Custom styling)

dayjs (Tiny date formatting helper)

There is no backend and no external database.
All data is stored locally in the browser using localStorage, making the app fully offline-friendly.

🧠 Key Features
📝 1. Create, Edit, and Delete Notes

Each note contains:

Title

Description

Category

Timestamp

Notes update instantly, feel responsive, and remain even after refreshing the browser.

🔎 2. Dynamic Search

A search bar lets you quickly filter notes by:

Title

Description

Search works as you type and is available from the sidebar.

🗂️ 3. Automatic Category System

Categories are generated automatically based on the notes you create.

Sidebar shows:

All Notes

Any custom categories you've added

📁 4. Export Notes

You can export all notes as a .json file with one click.
Useful for backups, migration, or sharing.

♻️ 5. Smart Duplicate Title Handling

If you repeat a title within the same category, the app auto-appends a number:

Example:
"Ideas" → "Ideas (1)" → "Ideas(2)"

Prevents accidental overwrites and keeps notes unique.

🕒 6. LocalStorage Persistence

All notes are saved under:

human-notes-v1


Initial notes load from notes.json if localStorage is empty.

⌨️ 7. Keyboard Shortcuts

Press N → Open “New Note” modal

Ctrl/Cmd + S → Save a note (inside modal)

Esc → Close any modal

Helps speed up workflow and enhances usability.

📱 8. Responsive and Accessible UI

The app adjusts to all screen sizes.
Focus indicators, ARIA labels, and semantic HTML ensure accessibility.

🧩 Project Structure
📁 project-root/
│
├── index.html
├── package.json
├── vite.config.js
│
└── 📁 src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    │
    ├── 📁 components/
    │   ├── Sidebar.jsx
    │   ├── NoteCard.jsx
    │   └── NoteModal.jsx
    │
    ├── 📁 utils/
    │   └── storage.js
    │
    └── 📁 data/
        └── notes.json


Each component is intentionally small and easy to understand.

⚙️ Installation & Setup

Make sure Node.js v16+ is installed.

1. Install dependencies
npm install

2. Run development server
npm run dev


App runs at:

https://notelyfy.netlify.app

3. Build for production
npm run build

4. Preview production build
npm run preview

🎨 UI/UX Design Philosophy
✦ Simplicity First

UI avoids unnecessary visual noise — only essential elements remain.

✦ Human-Friendly Visuals

Soft gradients, rounded corners, comfortable spacing, and readable typography.

✦ Minimal Dependencies

Only one small external library (dayjs) used.

✦ Accessibility Matters

All interactive elements are keyboard-navigable

ARIA labels for dynamic UI

Clear focus states

📦 Initial Sample Notes

Three friendly starter notes are loaded automatically if no saved notes exist.
These help the user understand how categories work.

🛠️ Developer Notes
Why Vite?

Vite provides lightning-fast startup and hot reloads — perfect for React.

Why Vanilla CSS?

Gives full control and keeps bundle size tiny.

Why localStorage?

Since this is a frontend-only project (as per requirement), localStorage is ideal for:

Offline persistence

Zero backend setup

Instant loading

🧪 Future Improvements (Optional Enhancements)

These are not included but are recommended if turning this app into a full product:

Markdown support in notes

Drag-and-drop note reordering

Cloud sync with MongoDB

User authentication (JWT/Google Login)

Themes (Dark/Light mode)

Pin notes to top

Rich Text Editor
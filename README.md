# DevStack 🚀

DevStack is a responsive technology stack builder built with React, TypeScript, and Tailwind CSS.

It allows developers to explore different technologies, add them to their own stack, and remove them whenever needed.

## ✨ Features

- 📱 Fully responsive design for mobile and other divices
- 🧩 Browse technologies by category
- ➕ Add technologies to your stack
- ❌ Remove individual technologies
- 🗑️ Remove all selected technologies
- 🔒 Disable the "Add to Stack" button after adding
- 🔔 Toast notifications when a technology is added
- 📌 Sticky navigation bar
- 📌 Sticky "Your Stack" sidebar on desktop
- ⚡ Technology data loaded from `data.json`
- 🎨 Modern UI built with Tailwind CSS

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Toastify
- Vite
- JSON

## 📂 Project Structure

```text
src/
├── components/
│   ├── TechnologyCard.tsx
│   └── StackSidebar.tsx
├── Types/
│   └── techtype.ts
├── App.tsx
├── Banner.tsx
├── Footer.tsx
├── Nav.tsx
└── Technologies.tsx

public/
└── data.json


1) JSX: JSX lets us write HTML-like code inside JavaScript to build React UI.
2) Props vs State: Props are data passed from parent to child, while state is data managed inside a component.
3) useState: useState stores changing data, and we used it to store the selected technologies in the stack.
4) useEffect: useEffect runs code after rendering, and it can be used to fetch and load our JSON data.
5) ey: A unique key helps React identify each item in a list and update it efficiently.
6) Conditional rendering: It means showing different UI based on a condition, like showing "No technologies selected" when the stack is empty.
7) Parent ↔ Child: A parent sends data through props, and a child sends information back by calling a function passed through props.
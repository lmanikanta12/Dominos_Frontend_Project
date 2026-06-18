# Domino's Pizza – React Frontend

A React + Vite frontend clone of the Domino's Pizza ordering experience, styled with Tailwind CSS. Built as a learning/practice project covering component composition, state-driven navigation, and form handling.

## Features

- **Home Page** – hero banner, "Why Order from Domino's" highlights, and quick-access cards for Menu, Store Locator, Birthday Party, and Catering.
- **Login** – name + mobile number registration with captcha verification.
- **Menu** – browse pizzas and items available to order.
- **Store Locator** – find nearby Domino's stores.
- **Gift Cards** – gift card section.
- **Birthday Party Booking** – form to book a birthday party.
- **Catering** – catering enquiry section.
- **Contact** – contact information and form.
- **Header & Footer** – persistent navigation with Login/Logout state and a footer with quick links and contact details.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) – dev server & build tool
- [Tailwind CSS](https://tailwindcss.com/) – styling
- [React Router DOM](https://reactrouter.com/) – installed as a dependency (not yet wired into routing; navigation currently uses local component state)
- [Lucide React](https://lucide.dev/) – icons

## Project Structure

```
Dominosreact/
├── public/
├── src/
│   ├── components/
│   │   ├── Homedominos.jsx      # Main app shell: header, footer, section switching
│   │   ├── Login.jsx            # Login / registration form
│   │   ├── Menu.jsx             # Pizza menu
│   │   ├── Store.jsx            # Store locator
│   │   ├── Giftcard.jsx         # Gift cards
│   │   ├── BirthdayPartyForm.jsx
│   │   ├── Catering.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                  # Entry component, renders Homedominos
│   ├── main.jsx                 # React root mount
│   └── index.css
├── package.json
└── vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- Navigation between sections (Home, Menu, Login, Contact, etc.) is currently handled via local component state (`activeSection`) inside `Homedominos.jsx`, rather than `react-router-dom`, even though the package is installed.
- Login is a front-end-only mock flow (no backend/auth integration) — it simply validates the form and a captcha, then flips the app into a "logged in" state.
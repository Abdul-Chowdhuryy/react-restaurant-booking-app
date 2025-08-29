React Restaurant Booking App

A responsive restaurant booking application built with React. Features include accessible form design with ARIA support, client-side validation, semantic HTML, and unit tests. Demonstrates modern React practices (hooks, state management, effects) and a mobile-first responsive UI.

🚀 Features

🎨 Responsive UI – Works seamlessly across desktop and mobile

♿ Accessibility-first design – Semantic HTML, ARIA labels, keyboard navigation

✅ Form validation & error handling – Name, email, date, time, guests

🧪 Unit testing with React Testing Library – Reliability and maintainability

⚡ Modern React Hooks – useState, useEffect for state and side effects

🗂 Project Structure
react-restaurant-booking-app/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  └─ BookingForm.js
│  ├─ tests/
│  │  └─ BookingForm.test.js
│  ├─ App.js
│  ├─ index.js
│  └─ styles.css
├─ package.json
└─ README.md

📦 Installation & Setup
# Clone repo
git clone https://github.com/<your-username>/react-restaurant-booking-app.git
cd react-restaurant-booking-app

# Install dependencies
npm install

# Run development server
npm start

# Run unit tests
npm test

✅ Validation Rules

Name – required, must not be empty

Email – required, must match email pattern

Date – required, cannot be in the past

Time – required, must be selected from options

Guests – integer between 1 and 10

🧪 Testing

Unit tests (in src/tests/BookingForm.test.js) cover:

Rendering of required form fields

Validation and error messages

Successful form submission

Run tests:

npm test

📱 Responsiveness

Built with CSS grid/flexbox

Mobile-first layout

Large tap targets & accessible spacing

🌳 Git & Deployment

Initialize Git and commit your work:

git init
git add -A
git commit -m "Initial commit - React Restaurant Booking App"


Push to GitHub:

git branch -M main
git remote add origin https://github.com/<your-username>/react-restaurant-booking-app.git
git push -u origin main


Deploy (optional):

GitHub Pages, Vercel, or Netlify

📄 License

MIT — Free to use for learning, practice, and portfolio.

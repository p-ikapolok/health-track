# 🏥 HealthTrack

HealthTrack is a healthcare management web application built with **React**.  
It provides dashboards for doctors and patients, enabling better communication, easy registration, and a smooth user experience.  

---

## 🚀 Features

- 🔐 **Authentication Pages**
  - Login (Doctor / Patient roles)
  - Doctor Registration
  - Patient Registration

- 📊 **Dashboards**
  - Doctor Dashboard with setup screen
  - Patient Dashboard with setup screen

- 🎨 **UI & Layout**
  - Responsive design with Tailwind CSS
  - Modern layout with gradient backgrounds
  - Role-based navigation

- ⚡ **Routing**
  - Client-side routing with React Router
  - 404 page handling
  - Setup splash screens before dashboard

---

## 🖼️ Screenshots / Demo

### 🔑 Login Page
![Login Screenshot](./screenshots/login.png)

### 🩺 Doctor Dashboard
![Doctor Dashboard Screenshot](./screenshots/doctor-dashboard.png)

### 👤 Patient Dashboard
![Patient Dashboard Screenshot](./screenshots/patient-dashboard.png)

### ⚠️ 404 Page
![404 Page Screenshot](./screenshots/404.png)

👉 **Live Demo:** [Deployed App Link](https://your-deployment-link.com)  

---

## 🛠️ Tech Stack

- **React 18**
- **React Router DOM v6**
- **Tailwind CSS**
- **Vite** (or CRA if you used it)
- **Node.js & npm**

---

## 📂 Project Structure

src/
├── components/ # Reusable UI components
│ ├── AvatarSVG.jsx
│ ├── DoctorDashboardLayout.jsx
│ ├── DoctorHeader.jsx
│ ├── DoctorNavIcons.jsx
│ ├── NineDots.jsx
│ └── Sidebar.jsx
│
├── pages/ # Page-level components
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── DoctorRegistration.jsx
│ ├── PatientRegistration.jsx
│ ├── DoctorDashboard.jsx
│ ├── PatientDashboard.jsx
│ ├── NotFound.jsx
│ └── SetupPage.jsx
│
├── App.jsx # App routes
└── main.jsx # Entry point



---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone git@github.com:p-ikapolok/health-track.git
cd health-track
Install dependencies:

bash

npm install
Run the app locally:

bash

npm run dev
Build for production:

bash

npm run build
Preview production build:

bash

npm run preview
🌍 Deployment Notes
Netlify / Vercel

Add a redirect rule so React Router works on refresh:

Netlify: add _redirects file in public/ with:

bash

/*   /index.html   200
Vercel: create vercel.json with:

json

{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
GitHub Pages

Use HashRouter instead of BrowserRouter in App.jsx.

Add "homepage": "https://<username>.github.io/health-track" in package.json.

👨‍💻 Author
Peter Ikapolok
Motto: "Success is a mind game."
GitHub: @p-ikapolok

📜 License
This project is licensed under the MIT License.
Feel free to use and modify as needed.



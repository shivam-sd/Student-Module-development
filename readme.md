# Student Dashboard - Full Stack Assignment

This is a **Full Stack MERN** project built as an assignment for the Full Stack Internship. It includes a responsive student dashboard with multiple sections including Student Info, Attendance, Results, Homework, Subjects, and Timetable.

---

## 📁 Project Structure

```
student-dashboard/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   └── App.jsx
│   └── vite.config.js
└── README.md
```

---

## 🔧 Technologies Used

* **Frontend**: React JS, Tailwind CSS, React Router
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas (Cloud)

---

## 🚀 Features Implemented

### ✅ Student Info

* Form with fields like name, roll number, class, section, gender, DOB, parent/guardian details, and addresses.
* Input validation, dropdowns, date pickers.
* Form submission integrated with backend (Node + MongoDB).

### ✅ Attendance

* Static display of attendance records.
* Summary view: total days, present, absent, percentage.
* Responsive table layout.

### ✅ Results

* Subject-wise marks with total and percentage calculation.
* Clean tabular layout using Tailwind CSS.

### ✅ Homework

* List of assignments with subject, description, and due date.
* Displayed using responsive cards.

### ✅ Subjects

* Displays subject name, subject code, and assigned teacher.
* Clean grid layout.

### ✅ Timetable

* Weekly schedule with subjects and time slots.
* Displayed as day-wise cards.

### ✅ Responsive Navbar

* Mobile-friendly navbar using hamburger menu.
* Linked routes to all sections.

---

## ⚙️ How to Run the Project

### 🖥 Backend (Node + Express)

```bash
cd backend
npm install
# Add your MongoDB URI in a `.env` file:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
npm start
```

### 🌐 Frontend (React)

```bash
cd frontend
npm install
# Create .env file
# VITE_BASE_URL=http://localhost:3000/api
npm run dev
```

---

## 🔒 MongoDB Atlas Configuration

* Go to [MongoDB Atlas](https://cloud.mongodb.com)
* Add your IP to **0.0.0.0./0** → “Add IP Address” → *223.233.73.92/32*
* Create a DB user with read/write permission
* Use the connection string in `.env`

---

## 📦 Deployment (Optional)

* Frontend can be deployed on **Vercel** or **Netlify**
* Backend can be deployed using **Render** or **Railway**

---

## 📁 Submission

* All code is organized in separate folders (`frontend`, `backend`)
* You can zip the project folder: `Shivam_StudentDashboard.zip`
* Include this `README.md` inside the folder.

---

## 👨‍💻 Author

**Shivam Maurya**
Email: `sm9792721@gmail.com`
GitHub: [github.com/shivam-sd](https://github.com/shivam-sd)
Location: India

---

## 📌 Notes

* The project is designed with clean UI and responsiveness.
* Except for Student Info, all other sections are static to match the assignment scope.
* Feel free to connect if further enhancement is needed.

---

Thank you! 🙏

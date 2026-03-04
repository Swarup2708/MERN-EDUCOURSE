EduCourse Hub

EduCourse Hub is a web-based platform that allows users to manage and explore educational materials such as notes, PDFs, and video resources. The application provides features to add, update, delete, search, and filter learning materials while tracking their popularity using view counts.

The project is built using the MERN stack and demonstrates the implementation of CRUD operations, filtering, searching, and dynamic data handling.

Features

Features

• Add new educational materials
• Update existing materials
• Delete materials
• View material details
• Search materials by title
• Filter materials by difficulty level
• View materials by instructor
• Display instructor contribution count
• Track material view count
• Show material type (Notes / PDF / Video)

Technology Stack

Frontend
• React
• React Router
• Axios
• Tailwind CSS / DaisyUI

Backend
• Node.js
• Express.js

Database
• MongoDB
• Mongoose

Project Structure
EduCourseHub
│
├── backend
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │
│   │   ├── controllers
│   │   │   └── materialController.js
│   │   │
│   │   ├── models
│   │   │   └── Material.js
│   │   │
│   │   ├── routes
│   │   │   └── materialRoutes.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── node_modules
│   ├── public
│   │
│   ├── src
│   │   ├── assets
│   │   │
│   │   ├── components
│   │   │   ├── MaterialCard.jsx
│   │   │   ├── MaterialNotFound.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── lib
│   │   │   └── axios.js
│   │   │
│   │   ├── pages
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── InstructorPage.jsx
│   │   │   └── MaterialDetailPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md

Clone the repository

git clone https://github.com/yourusername/educourse-hub.git

Navigate to the project folder

cd educourse-hub

Install backend dependencies

cd backend
npm install

Install frontend dependencies

cd frontend
npm install
Running the Project

Start backend server

cd backend
npm start

Start frontend server

cd frontend
npm run dev

Open browser and go to

http://localhost:5173
API Endpoints

GET /Material
Fetch all materials

GET /Material/:id
Fetch a single material

POST /Material
Create new material

PUT /Material/:id
Update material

DELETE /Material/:id
Delete material

Example Material Data

Example of material stored in the database:

{
  "title": "DBMS Complete Notes",
  "subject": "Database Management System",
  "description": "Comprehensive DBMS notes including normalization and SQL queries",
  "category": "Programming",
  "type": "PDF",
  "instructorName": "Dr. Neha Sharma",
  "publishYear": 2024,
  "difficultyLevel": "Intermediate",
  "price": 0,
  "views": 0
}
Learning Outcomes

This project demonstrates:

• Full CRUD implementation using MERN stack
• REST API design
• MongoDB data modeling
• React state management
• API communication using Axios
• Dynamic filtering and searching
• Frontend and backend integration

Future Improvements

• User authentication system
• File upload for PDFs and videos
• Material rating system
• Bookmark or favorites feature
• Pagination for large datasets

Author

Swarup Kumbhar
BSc Computer Science
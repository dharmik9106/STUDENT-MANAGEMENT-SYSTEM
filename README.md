# STUDENT-MANAGEMENT-SYSTEM
# Student Management API

A simple REST API for Student Management built using Node.js, Express.js, and MongoDB.

---

## Features

- Add Student
- Get All Students
- Get Student By ID
- Update Student
- Delete Student
- Centralized Error Handling
- MongoDB Database Connection

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```bash
project/
│
├── config/
│   └── DB.js
│
├── controller/
│   └── studentcontroller.js
│
├── middleware/
│   └── HttpError.js
│
├── model/
│   └── model.js
│
├── routes/
│   └── studentRoute.js
│
├── index.js
├── package.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
npm start
```

or

```bash
nodemon index.js
```

---

## Database Connection

Create a `.env` file and add:

```env
MONGO_URL=your_mongodb_connection_url
```

---

## API Endpoints

### Add Student

```http
POST /student/add
```

### Get All Students

```http
GET /student/getAllStudents
```

### Get Student By ID

```http
GET /student/:id
```

### Update Student

```http
PATCH /student/:id
```

### Delete Student

```http
DELETE /student/:id
```

---

## Sample Request Body

```json
{
  "name": "Dharmik",
  "grId": "101",
  "email": "dharmik@gmail.com",
  "course": "MERN Stack",
  "isActive": true,
  "mobileNumber": "9876543210"
}
```

---

## Success Response

```json
{
  "success": true,
  "message": "Student added successfully"
}
```

---

## Author

Dharmik Ahir

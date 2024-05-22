# Installation

## Client

```bash
cd Client
```
```bash
npm i
```
```bash
npm run dev
```


## Server

```bash
cd Server
```
```bash
npm i
```
```bash
npm run dev
```

## Note
- Add .env file in the Server directory
- File should contain
```bash
dbURL = your mongoDB URL
port = 8000
secret_key = your secret key
Salt_rounds = 5
ADMIN_GMAIL = your email
ADMIN_PASSWORD = your password
```

## Tech Stack / Libraries
- **React**
- **Redux**
- **Ant Designs**
- **Recharts**
- **NodeJs**
- **ExpressJs**
- **MongoDB**
- **Mongoose**
- **Nodemailer**
- **bcrypt**

## Deployment
- **Client**  - Vercel
- **Server**  - Render

## 🔗 Links

- Live - https://meitydashboard-atq3tkf5z-vishubs-projects.vercel.app/
- Server - https://dashboard-meity-backend.onrender.com/

## 🔗 Credentials for Admin

- Email - test@gmail.com
- Password - test
  
## 🔗 Credentials for Tutor and Student

- Email - student@gmail.com
- Password - student
- Email - tutor@gmail.com
- Password - tutor

## Features Completed

- Admin can regulate user access to particular data
- Account credentials are sent over mail once the user account is created
- Tutors can provide homework, assignments, and quizzes to students
- Students can monitor their performance and assess their progress using an LMS.
- Students can raise doubts
- Tutors can add responses to doubts
- Tutors can only administer (delete/edit) their courses (Quizzes, Contents)
- Admin can access to manage (delete/edit) all courses (Quizzes, Contents)
- Students can't administer (delete/edit/create) courses (Quizzes, Contents)
- Leaderboard showing top students with the maximum gaming points
- All Filter is working to make user-friendly UI
- Form validation



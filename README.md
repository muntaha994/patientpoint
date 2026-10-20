# PatientPoint

A full-stack patient management application with a **Ruby on Rails** backend and a **Next.js** frontend.

## Structure
- `frontend/`: Next.js web app (home, signup and patients pages)
- `backend/`: Ruby on Rails app (patients, users and authentication)

## Features
- User signup and authentication
- Patient records: create, view and edit
- Separate frontend and backend, built to work together

## Tech Stack
- Ruby on Rails
- Next.js (React)
- Docker and Kamal (deployment config)

## How to Run

**Backend**
```bash
cd backend
bundle install
bin/rails db:setup
bin/rails server
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

## Author
Muntaha ([@muntaha994](https://github.com/muntaha994))

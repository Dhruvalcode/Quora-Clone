# Quora Clone - Simple Post Manager

A basic social post web application built with **Node.js**, **Express**, and **EJS**.  
Users can **create, view, edit, and delete posts**. This project demonstrates a simple CRUD application with in-memory storage.

---

## Features

- View all posts
- Add a new post
- View a single post in detail
- Edit an existing post
- Delete a post
- URL-friendly routing using Express
- Unique post IDs using `uuid`

---

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Method-Override (to handle PUT/PATCH/DELETE)
- UUID (for unique IDs)
- CSS (basic styling)
- HTML

---

## Project Structure
project-root/
│
├── public/ # CSS, images, and static assets
├── views/ # EJS templates
│ ├── index.ejs
│ ├── new.ejs
│ ├── show.ejs
│ └── Edit.ejs
├── package.json
├── package-lock.json
└── app.js # Main server file


---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Dhruvalcode/Quora-Clone.git


Navigate to the project folder:
cd Quora-Clone

Install dependencies:
npm install


Open your browser and go to:
http://localhost:5252/post


Usage
Go to /post → view all posts
Go to /post/new → create a new post
Click on a post → view details (/post/show/:id)
Edit a post → /post/edit/:id
Delete a post → /post/delete/:id

All data is stored in-memory; posts will reset when the server restarts.
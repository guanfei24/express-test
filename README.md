# 📝 Express.js + MySQL Todos API

A simple CRUD REST API for managing Todos with user authentication (signup/login). Built using Express.js, MySQL, JWT, and bcrypt.

---

## 🚀 Features

- User signup & login with hashed passwords
- JWT-based authentication
- CRUD operations on Todos
- MySQL database integration
- Modular routing and middleware

---

## 🧱 Technologies Used

- Express.js
- MySQL (with mysql2)
- bcrypt (password hashing)
- jsonwebtoken (auth)
- dotenv (environment configs)

---

## 📦 Installation

```bash
git clone https://github.com/guanfei24/express-test.git
cd express-test
npm install
npm run dev
```

Create a .env file in your project root:

PORT=3000

# MySQL Configuration

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=testdb

Run this SQL in your MySQL client:

CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

CREATE TABLE todos (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

Sample Mock Todos (SQL)

INSERT INTO users (name, email, password) VALUES
('Alice Johnson', 'alice@example.com', 'hashed_password_1'),
('Bob Smith', 'bob@example.com', 'hashed_password_2'),
('Charlie Lee', 'charlie@example.com', 'hashed_password_3'),

INSERT INTO todos (title, user_id) VALUES
('Buy groceries', 1),
('Write backend', 1),
('Test API', 1);

Auth API:
POST /api/auth/signup
json
{
"email": "test@example.com",
"password": "123456"
}

POST /api/auth/login
json
{
"email": "test@example.com",
"password": "123456"
}
Returns:
json
{
"token": "your.jwt.token"
}

Todos API (Requires JWT Token in Header)
Header:

makefile
Authorization: Bearer <your_token>

GET /api/todos
Retrieve all todos for current user.

POST /api/todos
json
{
"title": "Buy groceries"
}

PUT /api/todos/:id
json
{
"title": "Buy milk instead"
}

DELETE /api/todos/:id

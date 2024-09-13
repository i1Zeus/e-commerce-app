# E-Commerce-App Project

## Table of Contents

- [E-Commerce-App Project](#e-commerce-app-project)
  - [Table of Contents](#table-of-contents)
  - [General Info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Contact](#contact)

## General Info

This project is a simple E-Commerce application featuring user authentication, product viewing, and cart management. Developed using modern technologies like React for the frontend and Node.js with MongoDB for the backend.

## Technologies

The project uses the following technologies:

- **React** - Frontend framework
- **Node.js** - JavaScript runtime
- **Express** - Backend framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Fetch API** - For making HTTP requests
- **React Router** - For routing in React
- **Tailwind CSS** - Utility-first CSS framework

## Setup

To run this project locally, follow these steps:

1. **Client Panel**

   ```bash
   $ cd e-commerce-app/frontend
   $ npm install
   $ npm run start
   ```

2. **Server/Backend**

   ```bash
   $ cd e-commerce-app/backend
   $ npm install
   $ npm run dev
   ```

3. **Database Setup**

   1. Create a new database in MongoDB.
   2. Obtain your MongoDB connection string.
   3. Create a .env file in the backend folder.
   4. Add the connection string to the .env file:

   ```env
   # BackEnd .env
   MONGODB_URI = ""
   TOKEN_SECRET_KEY = "ANY SECRET KEY MADE OF RANDOM CHARACTERS"
   FRONTEND_URL = "USUALLY http://localhost:3000"
   ```

   ```env
   # FrontEnd .env
   REACT_APP_CLOUD_NAME_CLOUDINARY = "The Name of Cloudinary"
   BACKEND_URL = "USUALLY http://localhost:8000"
   ```

DONE 😉❤️

## Usage

- Admin Panel: Manage products and users.
- Client Panel: Browse products, add items to cart, and complete purchases.
- Server/Backend: Handle authentication, product management, and data storage.

## Contact

If you encounter any issues or have questions, feel free to reach out:

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:husseinnajah123@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/hxg_1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/izeus6994)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/hxg.1)
[![Instagram](https://img.shields.io/badge/WebCraft-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/webcraf.t)

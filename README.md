# Mahesh Enterprises - Website (v0.1)

A basic MERN stack starter website for Mahesh Enterprises, a wholesale business
that sells cosmetics, toys, stationery, decoration items, and other general products.

This is an early, in-progress student project. It is being built step by step
while learning the MERN stack (MongoDB, Express, React, Node.js).

## Tech Stack

- Frontend: React (Vite), plain CSS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose (not connected yet in v0.1)

## Current Features (v0.1)

- Home, Products, About, and Contact pages (static, no routing yet)
- Product list rendered from a local JS array on the frontend
- Basic Express server with a `/api/products` route returning sample JSON
- Mongoose `Product` model created, but the database is not wired up yet

## Project Structure

```
mahesh-enterprises/
├── client/        React frontend
├── server/        Express backend
├── .gitignore
└── README.md
```

## How to Install

Clone the repo, then install dependencies separately for client and server.

```bash
cd client
npm install

cd ../server
npm install
```

## How to Run the Frontend

```bash
cd client
npm run dev
```

This starts the React app (Vite) at http://localhost:5173

## How to Run the Backend

```bash
cd server
npm run dev
```

This starts the Express server at http://localhost:5000

## Future Improvements

- Connect MongoDB and use real data instead of the sample array
- Add React Router (Products, Product Details, About, Contact)
- Fetch products from the backend API instead of a local array
- Add product CRUD (create, update, delete) from the backend
- Add a simple admin section with login
- Add product search and category filtering
- Add a customer enquiry system
- Add WhatsApp enquiry integration
- Add image upload for products
- Deploy the site with a custom domain

This project is a work in progress and will be improved gradually.

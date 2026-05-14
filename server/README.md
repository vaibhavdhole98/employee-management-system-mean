# Employee Management & Analytics System

## Overview

A production-style MEAN Stack Employee Management System built using:

* Angular
* Node.js
* Express.js
* MongoDB

The application supports employee management, authentication, analytics dashboards, filtering, pagination, sorting, JWT authentication, logging, and production-ready backend architecture.

---

# Tech Stack

## Frontend

* Angular Standalone Components
* TypeScript
* Reactive Forms
* Angular Routing
* HTTP Client
* Route Guards
* HTTP Interceptors

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Helmet
* Express Rate Limit

---

# Features Implemented

## Authentication

* User Registration
* User Login
* JWT Token Authentication
* Password Hashing using bcryptjs
* Protected Backend APIs
* Angular Route Guards
* HTTP Interceptor for JWT Token
* Logout Functionality

---

## Employee Management

* Create Employee
* Get All Employees
* Get Employee By ID
* Update Employee
* Delete Employee

---

## Advanced Backend Features

* Search APIs
* Pagination
* Sorting
* Filtering
* MongoDB Indexing
* Aggregation Pipelines
* Centralized Error Handling
* Async/Await Architecture
* Validation Middleware
* Production Folder Structure

---

# MongoDB Features Used

## Indexing

* Single Field Index
* Compound Index
* Text Index

## Aggregation Pipelines

* Average Salary By Department
* Total Employees By City
* Department Analytics Dashboard

---

# Frontend Features

* Responsive Dashboard UI
* Employee Table
* Dynamic Filtering
* Search Functionality
* Sorting Functionality
* Pagination UI
* Analytics Dashboard
* Authentication UI
* Login/Register Navigation
* Protected Frontend Routes

---

# Security Features

* Helmet Security Middleware
* Rate Limiting
* JWT Authentication
* Protected APIs

---

# Logging Features

* Custom Logger Utility
* Request/Error Logging

---

# Project Structure

```bash
Employee_Management/
│
├── client/
│   ├── src/
│   └── angular.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── utils/
│   │   └── validators/
│   │
│   ├── package.json
│   └── .env
```

---

# API Endpoints

## Authentication APIs

### Register

```http
POST /api/v1/auth/register
```

### Login

```http
POST /api/v1/auth/login
```

---

## Employee APIs

### Create Employee

```http
POST /api/v1/employees
```

### Get All Employees

```http
GET /api/v1/employees
```

### Get Employee By ID

```http
GET /api/v1/employees/:id
```

### Update Employee

```http
PUT /api/v1/employees/:id
```

### Delete Employee

```http
DELETE /api/v1/employees/:id
```

---

# Analytics APIs

### Average Salary By Department

```http
GET /api/v1/employees/analytics/average-salary
```

### Employees By City

```http
GET /api/v1/employees/analytics/employees-by-city
```

### Department Dashboard Analytics

```http
GET /api/v1/employees/analytics/department-dashboard
```

---

# Frontend Routes

```bash
/login
/register
/employees
/add-employee
/edit-employee/:id
/dashboard
```

---

# Installation

## Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
ng serve
```

---

# Environment Variables

Create `.env` inside server folder:

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_URL
JWT_SECRET=YOUR_SECRET_KEY
```

---

# Production Concepts Covered

* Production-Level MEAN Stack Architecture
* Authentication & Authorization
* REST APIs
* MongoDB Optimization
* Aggregation Pipelines
* Frontend Route Protection
* Logging
* Security Middleware
* Scalable Backend Structure

---

# Future Enhancements

* PM2 Clustering
* Nginx Reverse Proxy
* AWS EC2 Deployment
* MongoDB Atlas Deployment
* GitHub Actions CI/CD
* Docker
* HTTPS SSL
* Load Balancing

---

# Author

Vaibhav Dhole
MEAN Stack Developer

# ☕ Coffee Shop — Full-Stack Serverless Application

A modern, fully serverless Coffee Shop application built using **AWS Lambda**, **API Gateway**, **DynamoDB**, and **Cognito**, with a **React + Vite** frontend styled in a warm brown-and-cream café theme.  
The app supports **secure authentication**, **CRUD operations**, and includes an immersive **video background UI**.

---

## 🌐 Live Demo
`d3w1essk5is7g0.cloudfront.net`

---

## 📘 Overview

The **Coffee Shop** project showcases a complete serverless architecture with a polished, modern UI. Users can:

- Sign in via **AWS Cognito**
- View all coffee items
- Add new coffees
- Edit existing coffees
- Delete coffees
- View detailed coffee information

All backend logic runs on **AWS Lambda**, and data is stored in **DynamoDB**. No server management required.

---

## 🚀 Features

### 🎨 Frontend
- React (Vite)
- Brown & cream café theme
- Full-screen **MP4 video background**
- Responsive UI
- React Router navigation
- Secure API calls with Cognito JWT tokens

### ⚙️ Backend
- 4 AWS Lambda functions:
  - `CreateCoffee`
  - `GetCoffee`
  - `UpdateCoffee`
  - `DeleteCoffee`
- API Gateway routes with Cognito Authorizer
- DynamoDB table (`CoffeeShop`)
- Shared Lambda Layer (`utils.mjs`)

### 🔐 Authentication
- OAuth2 Authorization Code Flow using **AWS Cognito Hosted UI**
- Token management using `react-oidc-context`

---

## 🏗 Architecture

React (CloudFront + S3)
|
v
Cognito Authentication
|
v
API Gateway (Cognito Authorizer)
|
v
Lambda Functions ─────────→ DynamoDB (CoffeeShop table)
|
v
Lambda Layer (shared utils + DocClient)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript / JSX
- CSS
- React Router
- react-oidc-context

### Backend / Cloud
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB
- AWS Cognito
- AWS CloudFront + S3
- IAM Roles & Policies

---

## 📂 Project Structure

WS_SERVERLESS/
├── frontend/
│ ├── public/
│ │ └── bg.mp4
│ ├── src/
│ │ ├── App.jsx
│ │ ├── Home.jsx
│ │ ├── ItemDetails.jsx
│ │ ├── utils/
│ │ │ └── apis.js
│ │ └── main.jsx
│ └── index.html
│
├── lambda/
│ ├── create/
│ ├── get/
│ ├── update/
│ ├── delete/
│ └── node_modules/
│
├── Layers/
│ └── LambdaFunctionWithLayers/
│ └── nodejs/
│ └── utils.mjs
│
└── README.md


---

## 🔌 API Endpoints

| Method | Endpoint        | Description                       |
|--------|------------------|-----------------------------------|
| GET    | `/coffee`       | Fetch all coffees                  |
| GET    | `/coffee/{id}`  | Fetch a single coffee              |
| POST   | `/coffee`       | Create a new coffee item           |
| PUT    | `/coffee/{id}`  | Update an existing coffee item     |
| DELETE | `/coffee/{id}`  | Delete a coffee item               |

All API requests include a **Cognito JWT Bearer token**:
--------
## 🖥 Running the Frontend Locally

```bash
cd frontend
npm install
npm run dev
npm run build

------

DynamoDB Table

Table Name: CoffeeShop

Partition Key: coffeeId (String)

You can deploy Lambda functions using:

AWS Console

AWS CLI

AWS SAM

Zip uploads

🔐 Authentication (Cognito)

Uses AWS Cognito Hosted UI

OAuth2 Authorization Code Flow

Redirect URI → CloudFront deployment

React uses react-oidc-context to manage login session

ID token is sent on every API request

✨ Future Improvements

Add images for each coffee

Stripe payment integration

Search & filter

Coffee categories

Admin dashboard

Review & rating system

Dark mode toggle

More UI animations

👤 Author

Krish Kapila
Cloud Developer • AWS • Serverless • React
GitHub: https://github.com/krishkapila-hckr

Project Repo: https://github.com/krishkapila-hckr/CoffeeShop


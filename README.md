This is an **Angular standalone application** built for the Eleox interview. It includes **authentication, people management (view, create, delete), protected routes**.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```
## 🚀 Features

✔ **User Authentication** (Login with token storage)  
✔ **Fetch List of People** (`GET /people`)  
✔ **View Person Details** (`GET /people/:id`)  
✔ **Create New Person** (`POST /people`)  
✔ **Delete a Person** (`DELETE /people/:id`)  
 
✔ **API Calls Using `Bearer Token`** 

## 📌 Setup & Installation

### **1️⃣ Clone the Repository**

git clone https://github.com/YOUR_USERNAME/eleox-interview-app.git
cd eleox-interview-app

 ## 📌 Install Dependencies
 npm install

 ## 📌 Run the Application
 ng serve --open

 ## 📌 This will open the app at:
 http://localhost:4200/
 
 ## 📌 🔑 Authentication
  "username": "int@eleox.com",
  "password": "eleox"

## After logging in, the app stores a JWT Token in localStorage to authenticate API requests.
## API Endpoints

Feature	             Method	Endpoint
Login	             POST	/login
Get People   	    GET	/people
Get Person by ID	GET	/people/:id
Create Person	    POST	/people
Delete Person	    DELETE	/people/:id  
## All API calls require the Authorization Header:
Authorization: Bearer YOUR_ACCESS_TOKEN


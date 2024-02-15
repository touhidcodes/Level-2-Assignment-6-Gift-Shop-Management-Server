# Level-2 Assignment-5 Gift Shop Management Server

This is a Node.js and Express.js application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management. Ensure data integrity through validation using Zod.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- Express.js installed
- Typescript installed
- Zod installed

## Features

#### Authentication

- User Registration and Login
- Users must register and log in to access the dashboard.
- JWT (JSON Web Tokens) is used for secure authentication.
- A single role (user) is implemented for managing the system.
- Gift Shop Management

#### CRUD Operations

- Add, delete, update, and view gifts in the inventory.
- Robust filtering system for effective gift selection.
- Sales Management
- Search and sell products.
- Sales form with fields: quantity, buyer's name, and sale date.
- If quantity reaches zero, the product is removed from the inventory.
- View sales history categorized by week, day, month, and year.

## Getting Started

Follow these steps to get your project up and running:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-server-side-touhidcodes
   ```

2. **Navigate to the project folder:**

```
cd your-repository
```

3. **Install dependencies:**

```
npm install
```

4. **Configure environment variables:**
   Create a .env file in the project root and configure any necessary environment variables. For example:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-database
```

3. **Run the application:**

```
npm start
```

Your application should now be running at http://localhost:5000.

## User Credentials

```
# User Login:
· Username: user@assignment5
· Password: 123456789
```

## API Documentation

#### Live Project URL: https://l2a5-gift-shop-dashboard.web.app/

#### Live API URL: https://level2assignment5.vercel.app/

#### API Endpoints:

```
# Auth APIs:
-   Login: https://level2assignment5.vercel.app/api/auth/login/
-   Register: https://level2assignment5.vercel.app/api/auth/register/
-   Refresh Token: https://level2assignment5.vercel.app/api/auth/refresh-token/

# Gift Products APIs:
-   Get Product: https://level2assignment5.vercel.app/api/product/
-   Create Product: https://level2assignment5.vercel.app/api/product/
-   Single Product: https://level2assignment5.vercel.app/api/product/:productId
-   Update Product: https://level2assignment5.vercel.app/api/product/:productId
-   Delete Product: https://level2assignment5.vercel.app/api/product/:productId
-

# Sales APIs:
-   Get Sales History: https://level2assignment5.vercel.app/api/sales/
-   Create Sales: https://level2assignment5.vercel.app/api/sales/
```

## Project Dependencies

#### Dependencies List

```
 "dependencies": {
  "@types/bcrypt": "^5.0.2",
    "@types/jsonwebtoken": "^9.0.5",
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.1",
    "express": "^4.18.2",
    "http-status": "^1.7.3",
    "jsonwebtoken": "^9.0.2",
    "moment": "^2.30.1",
    "mongoose": "^8.1.1",
    "zod": "^3.22.4"
  },
```

#### Dev Dependencies List

```
 "devDependencies": {
 "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@typescript-eslint/eslint-plugin": "^6.19.1",
    "@typescript-eslint/parser": "^6.19.1",
    "eslint": "^8.56.0"
    }
```

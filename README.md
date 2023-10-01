# MERN Shopping Cart App

This is a MERN (MongoDB, Express, React, Node.js) shopping cart application built with Next.js. It allows users to browse products and add them to their shopping cart.

## Getting Started

To run this application locally, follow the steps below for both the server and client components.

### Server Setup

1. Create a `config.env` file in the root of the server component.

   Example `config.env` content:
   ```env
   NODE_ENV=development
   DATABASE=mongodb+srv://yourname:<PASSWORD>@cluster0.12345.mongodb.net/shopping-cart?retryWrites=true&w=majority
   DATABASE_PASSWORD=YOUR DATABASE PASSWORD
   PORT=3000
   JWT_SECRET='your-super-secret-string'
   JWT_EXPIRES_IN='7d'
   JWT_COOKIE_EXPIRES_IN=7


2. Load the development data into the `products` collection in your MongoDB database. You can find the data in the `dev-data/products.json` file located in the root folder of server component.

3. Run the server using one of the following commands:
- For production: `npm run start:prod`
- For testing the API only in development mode (such as postman): `npm start`

### Client Setup

1. Create a `.env` file in the root of the client component.

Example `.env` content:
```env
NEXT_PUBLIC_NODE_URL='http://localhost:8000' # Make sure this matches the port the server is running on
```

2. Run the client server using the following command:
-  Run the next app: npm run dev

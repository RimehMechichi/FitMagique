# FitMagique
## Overview

The **Product Management Service** is a backend microservice designed to manage products, including their details and associated images. It provides APIs for CRUD (Create, Read, Update, Delete) operations on products with support for uploading and serving product images.

This service is ideal for e-commerce platforms, inventory management systems, or any application requiring product-related operations.

---

## Features

- **CRUD Operations**:
  - Create a new product with images.
  - Fetch all products or specific product details.
  - Update product information and images.
  - Delete products.
  
- **Image Handling**:
  - Supports uploading multiple images for a product.
  - Only `.jpg` and `.png` formats are allowed.
  - Stores images in a public directory for easy access.

- **API-Driven**:
  - RESTful APIs for seamless integration.
  - JSON responses for structured data exchange.

---

## Technologies Used

- **Node.js** with **Express.js**: Backend server and REST API framework.
- **MongoDB**: NoSQL database for storing product data.
- **Multer**: Middleware for handling file uploads.
- **EJS**: Template engine for rendering dynamic views.
- **Path**: For file and directory operations.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/product-management-service.git
   cd product-management-service
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the project root and configure it:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/product-db
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

---

## API Endpoints

### 1. **Get All Products**
   - **Endpoint**: `GET /produits`
   - **Description**: Fetches all products.
   - **Response**: JSON array of products.

### 2. **Create a Product**
   - **Endpoint**: `POST /produits`
   - **Description**: Creates a new product with optional images.
   - **Headers**: 
     ```
     Content-Type: multipart/form-data
     ```
   - **Body**:
     - `Refproduit` (string)
     - `Nomproduit` (string)
     - `Description` (string)
     - `Quantite` (number)
     - `typep` (string)
     - `etatp` (string)
     - `images` (files, optional)
   - **Response**: Created product JSON.

### 3. **Update a Product**
   - **Endpoint**: `PUT /produits/:id`
   - **Description**: Updates an existing product and its images.
   - **Headers**: 
     ```
     Content-Type: multipart/form-data
     ```
   - **Body**: Same as Create Product.
   - **Response**: Updated product JSON.

### 4. **Delete a Product**
   - **Endpoint**: `DELETE /produits/:id`
   - **Description**: Deletes a product by ID.
   - **Response**: Success message.

---

## Project Structure

```
project-root/
│
├── models/
│   └── produit.js          # MongoDB Product Schema
├── routes/
│   └── produit.js          # Product Routes
├── public/
│   └── images/             # Uploaded product images
├── views/
│   └── index.ejs           # EJS template for rendering products
├── app.js                  # Main server file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## How to Use

1. Start the server by running:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000/produits
   ```
   Here, you can view and manage products.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a Pull Request.


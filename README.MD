# E-Commerce API

This API serves as the backend for an e-commerce platform. It includes features for user management, product handling, reviews, and order processing. The application ensures secure operations through various middleware for authentication, authorization, and data protection.

## Table of Contents

- [Technologies and Libraries](#technologies-and-libraries)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [License](#license)

## Technologies and Libraries

The project utilizes the following technologies and libraries:

- **bcryptjs**: Encrypts passwords using the bcrypt hash algorithm for secure password storage.
- **cookie-parser**: Parses cookies attached to client requests for session management.
- **cors**: Configures Cross-Origin Resource Sharing policies to allow resource sharing across different origins.
- **express**: A Node.js web framework that simplifies API and web application development by managing routes, middlewares, and other functionalities.
- **express-async-errors**: Simplifies error handling in asynchronous Express routes and middlewares.
- **express-fileupload**: Handles file uploads from client requests, useful for managing product images.
- **express-mongo-sanitize**: Sanitizes user-supplied data to prevent MongoDB Operator Injection.
- **express-rate-limit**: Limits repeated requests to APIs, preventing brute-force attacks.
- **helmet**: Enhances Express application security by setting various HTTP headers.
- **http-status-codes**: Provides constants for HTTP status codes to improve code readability.
- **joi**: Validates input data, such as HTTP requests, to ensure they meet specified schemas.
- **jsonwebtoken**: Enables the generation and verification of JSON Web Tokens (JWT) for authentication and authorization.
- **mongoose**: An object modeling library for MongoDB in Node.js that simplifies interactions with MongoDB databases.
- **morgan**: Logs HTTP requests for monitoring and debugging purposes.
- **validator**: Provides string validation and sanitization functions.
- **xss-clean**: Sanitizes user input to prevent Cross-Site Scripting (XSS) attacks.

## Installation

To run the E-Commerce API locally, follow these steps:

1. **Clone the project**:
    ```bash
    git clone https://github.com/DevShiba/ecommerce-api-node
    ```

2. **Navigate to the project directory**:
    ```bash
    cd ecommerce-api-node
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Start the server**:
    ```bash
    npm start
    ```

## Running Locally

Ensure you have MongoDB installed and running locally or provide a MongoDB URI in your environment variables. Start the server with the command provided above, and it will be available at `http://localhost:3000`.

## Usage

To use the API, follow these steps:

1. **Register a new account** or **log in** with an existing account.
    - To register, use the registerUser function in `authRoutes.js` by providing the user's name, email, and password.
    - To log in, use the loginUser function in the same file by providing the user's email and password.
2. Perform CRUD operations on products:
    - **Create** a new product: Use the createProduct function in `productRoutes.js`. This function requires the user's ID and product details.
    - **Read** one or multiple products: Use the getProduct or getProducts functions in the same file.
    - **Update** an existing product: Use the updateProduct function, providing the user's ID, product ID, and updated details.
    - **Delete** a product: Use the deleteProduct function, providing the user's ID and product ID.
3. Manage reviews:
    - **Create** a new review: Use the createReview function in `reviewRoutes.js`. This requires the user's ID, product ID, and review details.
    - **Read** one or multiple reviews: Use the getReview or getReviews functions.
    - **Update** an existing review: Use the updateReview function, providing the user's ID, review ID, and updated review details.
    - **Delete** a review: Use the deleteReview function, providing the user's ID and review ID.
4. Manage orders:
    - **Create** a new order: Use the createOrder function in `orderRoutes.js`. This requires the user's ID and order details.
    - **Read** one or multiple orders: Use the getOrder or getOrders functions.
    - **Update** an existing order: Use the updateOrder function, providing the user's ID, order ID, and updated details.
    - **Delete** an order: Use the deleteOrder function, providing the user's ID and order ID.

## API Documentation

The API is documented using Swagger. You can access the interactive API documentation at:

[API](https://ecommerce-api-node-j2gq.onrender.com)
[API Docs](https://apidog.com/apidoc/shared-94f679cc-61ae-436b-a4ef-5f625394bdf6)

![Swagger UI](https://i.imgur.com/mziXDVP.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
# Node.js API CRUD with Express

This project is a basic RESTful API for managing book data, built using Node.js, Express, and MySQL.

## Getting Started

Follow these steps to set up and test the API on your local machine:

### Prerequisites

Ensure the following are installed on your machine:
- [Node.js](https://nodejs.org) (v16 or higher recommended)
- [MySQL](https://www.mysql.com/)
- A tool to test APIs (e.g., [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adjisdhani/nodejs-api-crud-express
   ```

2. Navigate into the project directory:
   ```bash
   cd nodejs-api-crud-express
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and configure the environment variables:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=nodejs_api
   DB_PORT=3306
   PORT=3000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Database Setup

1. Open your MySQL client (e.g., phpMyAdmin, MySQL CLI).
2. Create a new database named `nodejs_api`:
   ```sql
   CREATE DATABASE nodejs_api;
   ```
3. Use the `nodejs_api` database:
   ```sql
   USE nodejs_api;
   ```
4. Create the `books` table:
   ```sql
   CREATE TABLE books (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       author VARCHAR(255) NOT NULL,
       published_date DATE NOT NULL,
       price DECIMAL(10, 2) NOT NULL
   );
   ```

### API Endpoints

The API provides the following endpoints:

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/books`     | Get all books           |
| GET    | `/api/books/:id` | Get a book by ID        |
| POST   | `/api/books`     | Create a new book       |
| PUT    | `/api/books/:id` | Update an existing book |
| DELETE | `/api/books/:id` | Delete a book by ID     |

### Testing the API

1. Open your API testing tool (e.g., Postman or Insomnia).
2. Use the following base URL for requests:
   ```
   http://localhost:3000/api/books
   ```

#### Example Requests

- **Get All Books**
  - Method: `GET`
  - URL: `http://localhost:3000/api/books`
  - Response:
    ```json
    [
        {
            "id": 1,
            "title": "Book Title",
            "author": "Author Name",
            "published_date": "2023-01-01",
            "price": 19.99
        }
    ]
    ```

- **Create a New Book**
  - Method: `POST`
  - URL: `http://localhost:3000/api/books`
  - Body (JSON):
    ```json
    {
        "title": "New Book",
        "author": "New Author",
        "published_date": "2023-12-01",
        "price": 25.99
    }
    ```
  - Response:
    ```json
    {
        "message": "Book created",
        "bookId": 1
    }
    ```

- **Update a Book**
  - Method: `PUT`
  - URL: `http://localhost:3000/api/books/1`
  - Body (JSON):
    ```json
    {
        "title": "Updated Title",
        "author": "Updated Author",
        "published_date": "2023-11-01",
        "price": 29.99
    }
    ```
  - Response:
    ```json
    {
        "message": "Book updated"
    }
    ```

- **Delete a Book**
  - Method: `DELETE`
  - URL: `http://localhost:3000/api/books/1`
  - Response:
    ```json
    {
        "message": "Book deleted"
    }
    ```

### Troubleshooting

- If you encounter issues with database connection, ensure your `.env` file has the correct database credentials and the MySQL server is running.
- For any other issues, check the server logs in your terminal.

### License

This project is licensed under the MIT License.

# TodosBackend

This project is a backend service for managing todos. It is built using Node.js and provides a RESTful API for creating, reading, updating, and deleting todo items.

## Features

- Create a new todo item
- Retrieve all todo items
- Update an existing todo item
- Delete a todo item

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/todos-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd todos-backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running at `http://localhost:3000`.

## API Endpoints

- `GET /todos` - Retrieve all todos
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

## License

This project is licensed under the MIT License.

# Test Cases for TodosBackend

This document outlines the test cases for the TodosBackend API endpoints.

## Test Cases

### 1. Retrieve all todos
**Endpoint:** `GET /todos`

**Description:** Test retrieving all todo items.

**Test Steps:**
1. Send a `GET` request to `/todos`.
2. Verify that the response status code is `200 OK`.
3. Verify that the response body contains a list of todo items.

**Expected Result:**
- The response status code should be `200 OK`.
- The response body should be an array of todo items.

### 2. Create a new todo
**Endpoint:** `POST /todos`

**Description:** Test creating a new todo item.

**Test Steps:**
1. Send a `POST` request to `/todos` with a JSON body containing the new todo item details.
    ```json
    {
        "title": "New Todo",
        "description": "This is a new todo item."
    }
    ```
2. Verify that the response status code is `201 Created`.
3. Verify that the response body contains the created todo item with an `id`.

**Expected Result:**
- The response status code should be `201 Created`.
- The response body should contain the created todo item with an `id`.

### 3. Update an existing todo
**Endpoint:** `PUT /todos/:id`

**Description:** Test updating an existing todo item.

**Test Steps:**
1. Send a `PUT` request to `/todos/:id` with a JSON body containing the updated todo item details.
    ```json
    {
        "title": "Updated Todo",
        "description": "This is an updated todo item."
    }
    ```
2. Verify that the response status code is `200 OK`.
3. Verify that the response body contains the updated todo item.

**Expected Result:**
- The response status code should be `200 OK`.
- The response body should contain the updated todo item.

### 4. Delete a todo
**Endpoint:** `DELETE /todos/:id`

**Description:** Test deleting a todo item.

**Test Steps:**
1. Send a `DELETE` request to `/todos/:id`.
2. Verify that the response status code is `204 No Content`.

**Expected Result:**
- The response status code should be `204 No Content`.

## Additional Notes
- Ensure that the server is running before executing the tests.
- Use a tool like Postman or an automated testing framework like Mocha and Chai to execute the tests.
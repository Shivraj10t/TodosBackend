import todosModele from "../models/todos.modele.js";

// Create a new todo
export const createTodo = async (req, res) => {
    try {
        const { title } = req.body; // Get the title from the request body
        if (!title) {
            return res.status(400).json({ message: 'Title is required' }); // Validate the title
        }
        const todo = await todosModele.create({ title }); // Create a new todo in the database
        res.status(201).json({ message: 'Todo added successfully', data: todo }); // Send a success response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors and send a 500 response
    }
};
// Get all todos
export const getTodos = async (req, res) => {
    try {
        const todos = await todosModele.find(); // Get all todos from the database
        res.status(200).json({ data: todos }); // Send the todos as a response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors and send a 500 response
    }
};
// Get a single todo
export const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todosModele.findById(id);
        res.status(200).json({ data: todo });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Update a todo
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params; // Get the todo ID from the request parameters
        const { title, completed } = req.body; // Get the title from the request body

        // Validate the todo
        if (!await varifyTodo(id)) {
            return res.status(404).json({ message: 'Todo not found | check Id' }); // Validate the todo
        }
        if (!title) {
            return res.status(400).json({ message: 'Title is required' }); // Validate the title
        }

        const todo = await todosModele.findByIdAndUpdate(id, { title, completed }); // Update the todo in the database

        res.status(200).json({ message: 'Todo updated successfully', data: todo })

    } catch (error) {
        return res.status(500).json({ message: error.message }); // Validate the title
    }
};
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!await varifyTodo(id)) {
            return res.status(404).json({ message: 'Todo not found | check Id' })
        }
        const todo = await todosModele.findByIdAndDelete(id);
        res.status(200).json({ message: 'Todo deleted successfully', data: todo });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


const varifyTodo = async (id) => {
    try {
        const todos = await todosModele.countDocuments({ _id: id });
        return todos > 0;
        
    } catch (error) {
        return false;
    }
};

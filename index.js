import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import endpoints from './utils/endpoints.utils.js';

const app = express();
const PORT = process.env.PORT | 0;
const MONGO_URI = process.env.MONGO_URI;


app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

import todosRouter from './routes/todo.route.js';


// Route to create a new todo
app.use(endpoints.todos, todosRouter);

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB Connected'); // Log successful connection

        app.listen(PORT, (req) => {
            console.log(`Server is running on ${PORT}`); // Start the server and log the port
        });
    })
    .catch((err) => { // Handle connection errors
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1); // Stop the app if DB fails
    });



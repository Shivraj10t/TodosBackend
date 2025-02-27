import express from 'express';
import { createTodo, getTodos, getTodo, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const todosRouter = express.Router();

todosRouter.post('/', createTodo)
    .get('/', getTodos)
    .get('/:id', getTodo)
    .put('/:id', updateTodo)
    .delete('/:id', deleteTodo);

export default todosRouter;
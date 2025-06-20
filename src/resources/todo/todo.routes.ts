import { Router } from 'express';
import { todoController } from './todo.controller';
import validationMiddleware from '../../middlewares/validation';
import { createTodoSchema, updateTodoSchema } from './todo.validation';

const router = Router();

router.get('/', (req, res) => {
  res.json(todoController.getTodos());
});

router.get('/:id', (req, res) => {
  const todo = todoController.getTodoById(req.params.id);
  if (!todo) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }
  res.json(todo);
});

router.post('/', validationMiddleware(createTodoSchema), (req, res) => {
  const todo = todoController.createTodo(req.body);
  res.status(201).json(todo);
});

router.put('/:id', validationMiddleware(updateTodoSchema), (req, res) => {
  const todo = todoController.updateTodo(req.params.id as string, req.body);
  res.json(todo);
});

export default router;

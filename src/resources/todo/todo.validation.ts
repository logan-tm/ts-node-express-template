import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  completed: z.boolean().optional(),
});

export const updateTodoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  completed: z.boolean().optional(),
});

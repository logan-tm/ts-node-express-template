export type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type CreateTodo = {
  title: string;
  description: string;
  completed?: boolean;
};

const todos: Todo[] = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Buy groceries for the week',
    completed: false,
  },
  {
    id: '2',
    title: 'Read a book',
    description: 'Read a book for 30 minutes',
    completed: true,
  },
];

export const todoController = {
  getTodos: () => todos,
  createTodo: (todo: CreateTodo) => {
    const newTodo: Todo = {
      id: (todos.length + 1).toString(),
      title: todo.title,
      description: todo.description,
      completed: todo.completed ?? false,
    };
    todos.push(newTodo);
    return newTodo;
  },
  getTodoById: (id: string) => todos.find((todo) => todo.id === id),
  updateTodo: (id: string, todo: Partial<Todo>) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const updatedTodo = { ...todos[index], ...todo } as Todo;
    if (index !== -1) {
      todos[index] = updatedTodo;
    }
    return updatedTodo;
  },
  deleteTodo: (id: string) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  },
  toggleTodoCompletion: (id: string) => {
    const todo = todoController.getTodoById(id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
};

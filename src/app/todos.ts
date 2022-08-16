export type Todo = {
  content: String;
  completed: boolean;
  subtasks: Todo[];
};

export const initialTodos: Todo[] = [
  {
    content: 'Work on the landing page',
    completed: true,
    subtasks: [],
  },
  {
    content: 'Buy food',
    completed: false,
    subtasks: [],
  },
  {
    content: 'Design a banner',
    completed: false,
    subtasks: [],
  },
];

export const name = 'hhhh';

export type UpdateTodoPayload = {
  type: 'update-self' | 'swap-up' | 'swap-down';
  newTodo?: Todo;
  path: number[];
};

export function updateTodos(todos: Todo[], payload: UpdateTodoPayload): Todo[] {
  switch (payload.type) {
    case 'update-self':
      let { path, newTodo } = payload;
      if (newTodo === undefined) {
        throw Error('cannot find todos');
      }
      return updateTodoAtPath(todos, path, newTodo);
    case 'swap-down':
    case 'swap-up':
      return swapTodoAtPath(todos, payload.path, payload.type);
  }
}

function updateTodoAtPath(
  oldTodos: Todo[],
  path: number[],
  newTodo: Todo
): Todo[] {
  let currentIndex = path.shift();
  if (currentIndex === undefined) {
    return oldTodos;
  }

  return oldTodos.map((todo, i) => {
    if (i !== currentIndex) {
      return todo;
    }
    if (path.length === 0) {
      return newTodo;
    }
    return {
      ...todo,
      subtasks: updateTodoAtPath(todo.subtasks, path, newTodo),
    };
  });
}

function swapTodoAtPath(
  todos: Todo[],
  path: number[],
  direction: 'swap-up' | 'swap-down'
): Todo[] {
  let [currentIndex, ...nextPath] = path;

  if (nextPath.length === 0) {
    let newTodos = [...todos];
    if (direction === 'swap-up' && currentIndex > 0) {
      newTodos[currentIndex] = todos[currentIndex - 1];
      newTodos[currentIndex - 1] = todos[currentIndex];
    } else if (direction === 'swap-down' && currentIndex < todos.length - 1) {
      newTodos[currentIndex] = todos[currentIndex + 1];
      newTodos[currentIndex + 1] = todos[currentIndex];
    }
    return newTodos;
  }

  return todos.map((todo, i) => {
    if (i !== currentIndex) return todo;
    return {
      ...todo,
      subtasks: swapTodoAtPath(todo.subtasks, nextPath, direction),
    };
  });
}

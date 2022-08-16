export type Todo = {
  content: String;
  completed: boolean;
  subtasks: Todo[];
};

export const initialTodos: Todo[] = [
  {
    content: "Work on the landing page",
    completed: true,
    subtasks: []
  },
  {
    content: "Buy food",
    completed: false,
    subtasks: []
  },
  {
    content: "Design a banner",
    completed: false,
    subtasks: []
  }
];

export const name = "hhhh";

export type Todo = {
  content: String;
  completed: boolean;
  subtasks: Todo[];
};

export const staticTodos: Todo[] = [
  {
    content: "Work on the landing page",
    completed: true,
    subtasks: []
  },
  {
    content: "Buy food",
    completed: false,
    subtasks: [
      {
        content: "Buy milk",
        completed: false,
        subtasks: [
          {
            content: "Buy tea spoons",
            completed: false,
            subtasks: []
          }
        ]
      }
    ]
  },
  {
    content: "Design a banner",
    completed: false,
    subtasks: []
  }
];

export const name = "hhhh";

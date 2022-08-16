export type Todo = {
  content: String;
  subtasks: Todo[];
};

export const staticTodos: Todo[] = [
  {
    content: "Work on the landing page",
    subtasks: []
  },
  {
    content: "Buy food",
    subtasks: []
  },
  {
    content: "Design a banner",
    subtasks: []
  },
  {
    content: "Cleaning on weekends",
    subtasks: [
      {
        content: "Declutter phone, laptop",
        subtasks: []
      },
      {
        content: "Get a mattress",
        subtasks: [
          {
            content: "Blah Blah",
            subtasks: []
          }
        ]
      }
    ]
  }
];

export const name = "hhhh";

import { Component, OnInit } from "@angular/core";
import { staticTodos, Todo, name } from "./todos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public name: String = name;
  public todos: Todo[] = staticTodos;

  ngOnInit() {}

  addTodo() {
    const newTodo: Todo = {
      content: "",
      completed: false,
      subtasks: []
    };
    this.todos.push(newTodo);
  }

  updateTodo(message: string) {
    console.log(message);
    console.log("We need to update this todo");
  }
}

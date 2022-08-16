import { Component } from "@angular/core";
import { staticTodos, Todo, name } from "./todos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public name: String = name;
  public todos: Todo[] = staticTodos;
}

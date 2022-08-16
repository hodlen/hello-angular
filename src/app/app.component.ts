import { Component } from "@angular/core";
import { initialTodos, Todo, name } from "./todos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public name: String = name;
  public todos: Todo[] = initialTodos;

  public onNotify(val: boolean) {
    console.log(`Catched ${val}`);
  }
}

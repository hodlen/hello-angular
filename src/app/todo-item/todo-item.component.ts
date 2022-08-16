import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../todos";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() public todoItem!: Todo;

  constructor() {}

  ngOnInit(): void {}
}

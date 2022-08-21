import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../todos";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() public todoItem!: Todo;
  @Input() public index: number = 0;
  @Output() public updateTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCheck() {
    this.todoItem.completed = !this.todoItem.completed;
  }

  onChange(event: Event) {
    let newValue = (event.target as HTMLInputElement).value;
    this.todoItem.content = newValue;
  }

  onSwapUp() {
    this.updateTodo.emit("up!");
  }

  onSwapDown() {
    this.updateTodo.emit("down!");
  }

  onChildTodoUpdate(event: string) {
    this.updateTodo.emit(event);
  }
}

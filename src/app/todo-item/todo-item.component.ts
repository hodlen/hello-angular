import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Todo } from "../todos";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit, OnChanges {
  @Input() public todoItem!: Todo;
  @Output() public notify = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onCheck(checked: boolean) {
    this.todoItem.completed = checked;
    this.notify.emit(checked);
  }
}

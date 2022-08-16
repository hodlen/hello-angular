import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo, UpdateTodoPayload } from '../todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() public todoItem!: Todo;
  @Input() public indexPath: number[] = [];
  @Output() public notify = new EventEmitter<UpdateTodoPayload>();

  constructor() {}

  ngOnInit(): void {}

  onChange(newTodo: Todo) {
    this.notify.emit({
      type: 'update-self',
      newTodo,
      path: this.indexPath,
    });
  }

  onCheck(checked: boolean) {
    this.onChange({ ...this.todoItem, completed: checked });
  }

  onInput(value: string) {
    this.onChange({ ...this.todoItem, content: value });
  }

  onSwap(direction: 'swap-up' | 'swap-down') {
    this.notify.emit({
      type: direction,
      path: this.indexPath,
    });
  }
}

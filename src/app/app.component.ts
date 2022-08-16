import { Component } from '@angular/core';
import {
  initialTodos,
  Todo,
  name,
  UpdateTodoPayload,
  updateTodos,
} from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name: String = name;
  public todos: Todo[] = initialTodos;

  public onTodoUpdate(payload: UpdateTodoPayload) {
    this.todos = updateTodos(this.todos, payload);
  }

  public onAppendTodo() {
    this.todos.push({ content: '', completed: false, subtasks: [] });
  }
}

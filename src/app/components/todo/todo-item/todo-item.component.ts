import { Component, Input } from '@angular/core';
import { TodoService } from 'app/components/todo/services/todo.service'

import { Todo } from 'app/shared/todoClass';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  deleteTodo() {
    this.todoService.deleteTodo(this.todo);
  }

  toggleState() {
    this.todoService.toggleTodoState(this.todo);
  }
}


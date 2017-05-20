import {Component, Input} from '@angular/core';

import {Todo} from 'app/shared/todoClass';
import {TodoService} from 'app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}
  toggleState(todo: Todo) {
    this.todoService.toggleTodoState(todo);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

}


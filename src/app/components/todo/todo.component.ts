import {Component} from '@angular/core';

import {Todo} from 'app/shared/todo';
import {todos} from 'app/shared/todosData';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  todos: Todo[] = todos;

  addTodo(todo: Todo) {
    todos.push(todo);
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/todo';

import { todos } from '../../shared/todosData';

@Component({
  selector:    'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls:   ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = todos;
  newTodoTitle = '';

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  addTodo() {

    this.todos.push({
      title: this.newTodoTitle,
      complited: false
    });

    this.newTodoTitle = '';
  }
}

import { Component, OnInit } from '@angular/core';
// import { Todo } from '../../shared/todo';
export class Todo {
  constructor(
    public title: string,
    public complited: boolean = false
  ) {}
}
import { todos } from '../../shared/todosData';

@Component({
  selector:    'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls:   ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = todos;
  newTodoTitle: string = '';

  toggleState(todo: Todo) {
    todo.complited = !todo.complited;
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);

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

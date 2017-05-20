import { Component, OnInit } from '@angular/core';

import { Todo } from 'app/shared/todoClass';
import { TodoService } from 'app/components/todo/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  toggleTodoState(todo: Todo) {
    this.todoService.toggleTodoState(todo)
      .subscribe(() => {
        todo.complited = !todo.complited;
      });
  }

  addTodo(title: string) {
    this.todoService.addTodo(title)
      .subscribe(todo => this.todos.push(todo));
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo)
      .subscribe(() => {
        const index = this.todos.indexOf(todo);

        if (index > -1) {
          this.todos.splice(index, 1);
        }
      });
  }
}

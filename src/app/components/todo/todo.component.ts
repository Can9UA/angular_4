import {Component, OnInit} from '@angular/core';

import {Todo} from 'app/shared/todoClass';
import {TodoService} from 'app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor (private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);
  }
}

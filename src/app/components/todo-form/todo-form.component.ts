import {Component, EventEmitter, Output} from '@angular/core';

import {Todo} from 'app/shared/todoClass';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title = '';
  @Output() addTodo = new EventEmitter();

  createTodo() {
    this.addTodo.emit(new Todo(this.title));
  }
}

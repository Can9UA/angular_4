import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Todo} from 'app/shared/todoClass';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter;

  toggleState() {
    this.todo.complited = !this.todo.complited;
  }

  deleteMe() {
    this.deleteTodo.emit(this.todo);
  }
}


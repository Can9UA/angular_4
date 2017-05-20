import {
  Component, Input, EventEmitter,
  Output
} from '@angular/core';

import { Todo } from 'app/shared/todoClass';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteMe: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleMe: EventEmitter<Todo> = new EventEmitter();

  delete(todo: Todo) {
    this.deleteMe.emit(todo);
  }

  toggle(todo: Todo) {
    this.toggleMe.emit(todo);
  }
}


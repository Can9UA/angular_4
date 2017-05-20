import {
  Component, EventEmitter, Input,
  Output
} from '@angular/core';

import { Todo } from 'app/shared/todoClass';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() deleteItem: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleItemState: EventEmitter<Todo> = new EventEmitter();

  deleteThis(todo: Todo) {
    this.deleteItem.emit(todo);
  }

  toggleThis(todo: Todo) {
    this.toggleItemState.emit(todo);
  }
}

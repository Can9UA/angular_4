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
}

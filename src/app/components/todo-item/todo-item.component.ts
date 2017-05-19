import { Component, Input } from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo;

  toggleState() {
    this.todo.complited = !this.todo.complited;
  }

}

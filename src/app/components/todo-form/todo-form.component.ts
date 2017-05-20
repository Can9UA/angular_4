import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title = '';
  @Output() addTodo = new EventEmitter();

  onSubmit() {
    this.addTodo.emit(this.title);
  }
}

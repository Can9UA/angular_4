import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title = '';

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.todoService.addTodo(this.title);
  }
}

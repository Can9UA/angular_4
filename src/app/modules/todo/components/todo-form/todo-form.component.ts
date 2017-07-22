import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {
  title = 'title text';
  field2 = 112231;
  message: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() { this.message = this.todoService.getMessage(); }

  onSubmit() {
    this.todoService.addTodo(this.title);
  }

  someFunction() { return true; }
}

import { Component } from '@angular/core';

// import { Todo } from '../../shared/todo';
export class Todo {
  constructor(
    public title: string,
    public complited: boolean = false
  ) {}
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  todo: Todo = new Todo('asd');

}

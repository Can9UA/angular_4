import { Component, OnInit } from '@angular/core';

interface ITodo {
  title: string;
  complited: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: ITodo[] = [{
    title: 'Title 1',
    complited: false
  }, {
    title: 'Title 2',
    complited: true
  }, {
    title: 'Title 3',
    complited: false
  }, {
    title: 'Title 4',
    complited: false
  }];
  newTodoTitle: string = '';

  toggleState(todo: ITodo) {
    todo.complited = !todo.complited;
  }

  deleteTodo(todo: ITodo) {
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  addTodo() {

    this.todos.push({
      title: this.newTodoTitle,
      complited: false
    });

    this.newTodoTitle = '';
  }
}

import {Injectable} from '@angular/core';
import {Todo} from 'app/shared/todoClass';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private apiUrl = 'api/todos';
  todos: Todo[] = [];

  constructor (private http: Http) {}

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data)
      .then(todos => this.todos = todos)
      .catch(this.hadleError);
  }

  toggleTodoState(todo: Todo) {
    todo.complited = !todo.complited;
  }

  addTodo(title: string) {
    this.todos.push(new Todo(title));
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  private hadleError(error: any) {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}

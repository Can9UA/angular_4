import { Injectable } from '@angular/core';
import { Todo } from 'app/shared/todoClass';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw'; now in rxjs/Observable
import { Error } from 'tslint/lib/error';

@Injectable()
export class TodoService {
  private apiUrl = 'api/todos';
  todos: Todo[] = [];

  constructor(private http: Http) {}

  getMessage() {
    return 'Message Text';
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json().data)
      .map(todos => this.todos = todos)
      .catch(this.handleError);
  }

  toggleTodoState(todo: Todo) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiUrl}/${todo.id}`;

    this.http.put(url, todo, options)
      .map(() => {
        todo.complited = !todo.complited;
      })
      .catch(this.handleError)
      .subscribe();
  }

  addTodo(title: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const newTodo = new Todo(title);

    this.http.post(this.apiUrl, newTodo, options)
      .map(res => res.json().data)
      .map(todo => this.todos.push(todo))
      .catch(this.handleError)
      .subscribe();
  }

  deleteTodo(todo: Todo) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiUrl}/${todo.id}`;

    this.http.delete(url, options)
      .map(() => {
        const index = this.todos.indexOf(todo);

        if (index > -1) {
          this.todos.splice(index, 1);
        }
      })
      .catch(this.handleError)
      .subscribe();
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(new Error());
  }
}

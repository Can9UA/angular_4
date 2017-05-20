import {Injectable} from '@angular/core';
import {todos} from 'app/shared/todosData';
import {Todo} from 'app/shared/todoClass';

@Injectable()
export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Todo[] {
    return this.todos;
  }
}

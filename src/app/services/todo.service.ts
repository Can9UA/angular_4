import {Injectable} from '@angular/core';
import {todos} from 'app/shared/todosData';
import {Todo} from 'app/shared/todoClass';

@Injectable()
export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Todo[] {
    return this.todos;
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
}

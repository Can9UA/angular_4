import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoService } from 'app/components/todo/services/todo.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

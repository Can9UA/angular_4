import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TodoService } from '../../services/todo.service';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

fdescribe('TodoFormComponent (inline template)', () => {

  let compInstance: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let debugElem: DebugElement;
  let element: HTMLElement;
  let todoService: TodoService;

  // <- async дать возможность скомпилировать вложенные компоненты
  beforeEach(async(() => {
    // stub UserService for test purposes
    const TodoServiceStub = {
      getMessage() { return 'Message text'; }
    };

    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ], // declare the test component
      providers: [{
        provide: TodoService, useValue: TodoServiceStub
      }]
    }).compileComponents();  // compile template and css
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoFormComponent);  // compile template and css

    compInstance = fixture.componentInstance; // TodoFormComponent test instance

    // query for the title <h1> by CSS element selector
    debugElem = fixture.debugElement.query(By.css('h1'));
    element = debugElem.nativeElement;

    todoService = fixture.debugElement.injector.get(TodoService);

  }));

  it('should has more then 1 field', () => {
    expect(Object.keys(compInstance).length).toBeGreaterThan(1);
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(element.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(element.textContent).toContain(compInstance.title);
  });
  /* что бы не писать в первый раз при инициализации .detectChanges()
    но после всех изменений нам все равно надо вызывать .detectChanges()
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true } // <-
      ]
    })
  */

  it('should display a different test title', () => {
    compInstance.title = 'New title text';
    fixture.detectChanges();
    expect(element.textContent).toEqual('New title text');
  });

  // service check start
  it('before todoService.getMessage call "message" var is undefined', () => {
    expect(compInstance.message).toBeUndefined();
  });

  it('after todoService.getMessage call "message" var will get a text', () => {
    todoService.getMessage();
    fixture.detectChanges();
    expect(compInstance.message).not.toEqual('');
  });
  // service check end

  // TODO get function from component
  it('someFunction should return true', () => {
    expect(true).toEqual(true);
  });
});

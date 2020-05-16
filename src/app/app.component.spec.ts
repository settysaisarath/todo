import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TodoApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TodoApp');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('TodoApp app is running!');
  });
});

describe('test for add method',() => {
  it('length of the array must  increase by one', () =>
  {
    const app=new AppComponent();
    const newTodo={
      label:'go to library',
      priority:1,
      done:false
    }
    expect(app.addTodo(newTodo)).toBe(6)
  });
  it('length of the array must decrease by one', () =>
  {
    const app=new AppComponent();
    const newTodo={
      label:'go to library',
      priority:1,
      done:false
    }
    expect(app.deleteTodo(newTodo.label)).toBe(5);
  });
})
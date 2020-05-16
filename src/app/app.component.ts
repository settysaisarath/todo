import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  todo=[{label: 'Todo app',
  done:false,
  priority:3},
  {label: 'pay mobile bill',
  done:true,
  priority:1},
  {label: 'clean house',
  done:false,
  priority:4},
  {label: 'Fix the Bulb',
  done:false,
  priority:3},
  {label: 'taska status ',
  done:false,
  priority:5}];


   addTodo(newTodoLabel){
     var newTodo = {
       label:newTodoLabel,
       priority:1,
       done:false
     };
    var result= this.todo.push(newTodo);
    console.log(result);
    return result;
   }
   deleteTodo(newTodo){
     this.todo=this.todo.filter(t => t.label !== newTodo.label);
    return this.todo.length;
   }
}








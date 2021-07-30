import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  //todoMutable: Todo;

  constructor() { 
    
  }

  ngOnInit(): void {

    //this.todoMutable = {...this.todo};
    //console.log(this.todoMutable);
  }

}

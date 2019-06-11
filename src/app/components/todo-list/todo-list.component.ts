import { Component, OnInit } from '@angular/core';
import { TodoListItem } from './models';
import { TodosDataService } from './todos-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos$: Observable<TodoListItem[]>;

  constructor(private service: TodosDataService) { }

  ngOnInit() {
    this.todos$ = this.service.getAll();
  }

  markComplete(item: TodoListItem) {

  }

  add(item: string) {
    const description = item;
    this.service.add(description);
  }

  clearCompleted() {

  }
}

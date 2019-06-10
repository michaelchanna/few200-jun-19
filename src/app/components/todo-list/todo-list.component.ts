import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  items: TodoListItem[] = [
    { description: 'Mow Grass', completed: false },
    { description: 'Clean Gutters', completed: false },
    { description: 'Change Oil', completed: true }
  ];

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(item: string) {
    const description = item;
    this.items.unshift({ description, completed: false });
  }

  clearCompleted() {
    this.items = this.items.filter(item => !item.completed);
  }
}

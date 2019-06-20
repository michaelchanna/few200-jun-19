import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectBookItems } from './reducers';
import { Observable } from 'rxjs';
import { BookItem } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBookItems);
  }

}

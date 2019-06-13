import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectShoppingItems } from './reducers';
import { Observable } from 'rxjs';
import { ShoppingItem } from './models';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  items$: Observable<ShoppingItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectShoppingItems);
  }

}

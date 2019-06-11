import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  current$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.current$ = this.store.select(state => state.counter.current);
  }

  increment() {
    this.store.dispatch({ type: 'Increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'Decrement' });
  }

  reset() {
    this.store.dispatch({ type: 'Reset' });
  }
}

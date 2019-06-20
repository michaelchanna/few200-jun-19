import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { bookAddedToList } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(t: HTMLInputElement, a: HTMLInputElement, f: HTMLInputElement) {
    const title = t.value;
    const author = a.value;
    const format = f.value;
    this.store.dispatch(bookAddedToList({ title }, { author }, { format }));
    t.value = '';
    a.value = '';
    f.value = 'Hardcover';
    t.focus();
  }
}

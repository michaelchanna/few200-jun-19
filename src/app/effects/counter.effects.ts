import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // LOG OUT TO THE CONSOLE EACH ACTION
  // logItOut = createEffect(() =>
  //   this.actions$
  //     .pipe(
  //       tap(a => console.log(a.type))
  //     ),
  //   { dispatch: false }
  // );

  // Turn an appStart into either a countBySet, or nothing.
  readSetCountBy = createEffect(() =>
    this.actions$
      .pipe(
        ofType(applicationActions.appStarted), // if it is the appStarted action
        map(() => localStorage.getItem('count-by')), // read it out of localstorage.  It is either 1, 3, 5, or null
        filter(x => x !== null), // if it is null, just stop here.  go with the default in the initial state
        map(countBy => parseInt(countBy, 10)), // turn that string into a number (the 10 in parseInt says this is a base 10 number)
        map(count => counterActions.countBySet({ by: count })) // Dispatch the action
      ));

  saveSetCountBy = createEffect(() =>
    this.actions$
      .pipe(
        ofType(counterActions.countBySet),
        tap(action => {
          localStorage.setItem('count-by', action.by.toString());
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) { }

}

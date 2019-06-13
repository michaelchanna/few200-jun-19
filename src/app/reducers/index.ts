import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// 1. "Feature Selector"

// 2. A selector for each "branch" of the features state
const selectCounterBranch = (state: State) => state.counter;
// 3. Any helpers, etc?

// 4. The selectors that are needed for the components.

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
export const selectAtZero = createSelector(selectCurrentCount, c => c === 0);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

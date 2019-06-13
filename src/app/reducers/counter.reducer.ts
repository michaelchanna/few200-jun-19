import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
export interface State {
  current: number;
}

const initialState: State = {
  current: 0
};

export const reducer = createReducer(
  initialState,
  on(actions.countIncremented, state => ({ current: state.current + 1 })),
  on(actions.countDecremented, state => ({ current: state.current - 1 })),
  on(actions.countReset, state => initialState)
);

// OLD SKOOL WAY
// export function reducer(state: State = initialState, action: Action): State {
//   switch (action.type) {
//     case 'Increment': {
//       return {
//         current: state.current + 1
//       };
//     }
//     case 'Decrement': {
//       return {
//         current: state.current - 1
//       };
//     }
//     case 'Reset': {
//       return {
//         current: 0
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }

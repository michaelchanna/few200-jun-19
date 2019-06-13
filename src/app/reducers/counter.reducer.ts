import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
export interface State {
  current: number;
  by: number;
}

const initialState: State = {
  current: 0,
  by: 1
};

export const reducer = createReducer(
  initialState,
  on(actions.countIncremented, (state: State) => ({ current: state.current + state.by, by: state.by })),
  on(actions.countDecremented, (state: State) => ({ current: state.current - state.by, by: state.by })),
  on(actions.countBySet, (state, { by }) => ({ current: state.current, by })),
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

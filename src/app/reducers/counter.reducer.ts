import { Action } from '@ngrx/store';

export interface State {
  current: number;
}

const initialState: State = {
  current: 0
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'Increment': {
      return {
        current: state.current + 1
      };
    }
    case 'Decrement': {
      return {
        current: state.current - 1
      };
    }
    case 'Reset': {
      return {
        current: 0
      };
    }
    default: {
      return state;
    }
  }
}

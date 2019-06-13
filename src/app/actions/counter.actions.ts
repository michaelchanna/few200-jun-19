import { createAction, props } from '@ngrx/store';

// Actions
export const countIncremented = createAction(
  '[Counter] Count Incremented'
);
export const countDecremented = createAction(
  '[Counter] Count Decremented'
);
export const countReset = createAction(
  '[Counter] Count Reset'
);
export const countBySet = createAction(
  '[Counter] Count By Set',
  props<{ by: number }>()
);

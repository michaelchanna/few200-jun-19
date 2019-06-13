import { createAction, props } from '@ngrx/store';

export const itemAddedToList = createAction(
  '[shopping/list] item added',
  props<{ description: string }>()
);

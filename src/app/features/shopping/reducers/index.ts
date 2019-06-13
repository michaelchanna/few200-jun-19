export const featureName = 'shopping';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingItem } from '../models';

export interface State {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};


// 1. Create a Feature Selector

const selectFeature = createFeatureSelector<State>(featureName);

// 2. Create a selector per branch
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. Helpers?

const { selectAll: selectAllShoppingEntities } = fromList.adapter.getSelectors(selectListBranch);
// Object Destructing.


// 4. What does the component need?

// ListComponent needs ShoppingItem[]
export const selectShoppingItems = createSelector(selectAllShoppingEntities, s => s as ShoppingItem[]);

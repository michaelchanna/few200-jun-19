import { createReducer } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
export interface ShoppingEntity {
  id: string;
  description: string;
}

export interface ListState extends EntityState<ShoppingEntity> {

}

export const initialListState: ListState = {
  ids: ['X03939'],
  entities: {
    X03939: {
      id: 'X03939',
      description: 'Beer'
    }
  }
};

export const adapter = createEntityAdapter<ShoppingEntity>();

export const reducer = createReducer(
  initialListState
);

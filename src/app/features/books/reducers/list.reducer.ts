
import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/list.actions';


export interface BookEntity {
    id: string;
    title: string;
    author: string;
    format: string;
}

export interface ListState extends EntityState<BookEntity> {

}

export const initialListState: ListState = {
    ids: ['B00001'],
    entities: {
        B00001: {
            id: 'B00001',
            title: 'Angular Tips and Tricks',
            author: 'Mike Hanna',
            format: 'E-book'
        }
    }
};

export const adapter = createEntityAdapter<BookEntity>();

export const reducer = createReducer(
    initialListState,
    on(actions.bookAddedToList, (state, { entity }) => adapter.addOne(entity, state))
);

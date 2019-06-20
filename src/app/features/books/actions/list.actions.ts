import { createAction, props } from '@ngrx/store';

let currentTempId = 0;

export const bookAddedToList = createAction(
    '[books/list] item added',
    ({ title }: { title: string }, { author }: { author: string }, { format }: { format: string }) => {
        return {
            entity: {
                id: 'TEMP-' + currentTempId++,
                title,
                author,
                format
            }
        };
    });

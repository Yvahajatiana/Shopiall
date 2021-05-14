import { createReducer, on } from '@ngrx/store';
import { loadCommentOk } from './actions';

export interface State {
  comments: Comment[];
}

export const initialState: State = {
  comments: [],
};

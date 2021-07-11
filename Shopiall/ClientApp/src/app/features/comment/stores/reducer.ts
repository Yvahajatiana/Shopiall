import { createReducer, on } from '@ngrx/store';
import { initialState } from '.';
import { loadCommentOk } from './actions';

export const commentReducer = createReducer(
  initialState,
  on(loadCommentOk, (state: any, { comments }: any) => ({ ...state, comments }))
);

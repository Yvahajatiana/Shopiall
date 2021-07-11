import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { AppState } from 'src/app/AppState';
import { loadCommentOk } from './actions';

export interface CommentState {
  comments: Comment[];
}

export const initialState: CommentState = {
  comments: [],
};

export const commentFeatureKey = 'commentState';
export const selectCommentFeature =
  createFeatureSelector<AppState, CommentState>(commentFeatureKey);
export const selectComments = createSelector(
  selectCommentFeature,
  (state: CommentState) => state.comments
);

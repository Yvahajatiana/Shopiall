import { createAction, props } from '@ngrx/store';

export enum ACTION_TYPE {
  LOAD_COMMENTS = 'Load comment',
  LOAD_COMMENTS_OK = 'Load comment success',
  LOAD_COMMENTS_KO = 'Load comment failed',
}

export const loadComment = createAction(ACTION_TYPE.LOAD_COMMENTS);

export const loadCommentOk = createAction(
  ACTION_TYPE.LOAD_COMMENTS_OK,
  props<{ comments: Comment[] }>()
);

export const loadCommentKo = createAction(ACTION_TYPE.LOAD_COMMENTS_KO);

import { Injectable } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { ACTION_TYPE } from './actions';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class CommentEffect {
  loadComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTION_TYPE.LOAD_COMMENTS),
      switchMap(() => {
        return this.commentService.getComments().pipe(
          map((data) => ({
            type: ACTION_TYPE.LOAD_COMMENTS_OK,
            comments: data,
          })),
          catchError(() => of({ type: ACTION_TYPE.LOAD_COMMENTS_KO }))
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private readonly commentService: CommentService
  ) {}
}

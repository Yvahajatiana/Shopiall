import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UpsellService } from '../services/upsell.service';
import { UPSELL_ACTION_TYPE } from './upsell.actions';

@Injectable()
export class UpsellEffects {
  constructor(
    private actions$: Actions,
    private readonly upsellService: UpsellService
  ) {}

  loadUpsellList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPSELL_ACTION_TYPE.LOAD_UPSELL_LIST),
      switchMap(() =>
        this.upsellService.getUpsellList().pipe(
          map((data) => ({
            type: UPSELL_ACTION_TYPE.LOAD_UPSELL_LIST_OK,
            upsells: data,
          })),
          catchError(() => of({ type: UPSELL_ACTION_TYPE.LOAD_UPSELL_LIST_KO }))
        )
      )
    )
  );

  loadUpsellById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPSELL_ACTION_TYPE.LOAD_UPSELL_BY_ID),
      switchMap((action: any) =>
        this.upsellService.getUpsellById(action.id).pipe(
          map((data) => ({
            type: UPSELL_ACTION_TYPE.LOAD_UPSELL_BY_ID_OK,
            upsells: data,
          })),
          catchError(() =>
            of({ type: UPSELL_ACTION_TYPE.LOAD_UPSELL_BY_ID_KO })
          )
        )
      )
    )
  );

  updateUpsell$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPSELL_ACTION_TYPE.UPDATE_UPSELL),
      switchMap((action: any) =>
        this.upsellService.updateUpsell(action.id, action.upsell).pipe(
          map((data) => ({
            type: UPSELL_ACTION_TYPE.UPDATE_UPSELL_OK,
            upsells: data,
          })),
          catchError(() => of({ type: UPSELL_ACTION_TYPE.UPDATE_UPSELL_KO }))
        )
      )
    )
  );

  createUpsell$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPSELL_ACTION_TYPE.CREATE_UPSELL),
      switchMap((action: any) =>
        this.upsellService.createUpsell(action.upsell).pipe(
          map((data) => ({
            type: UPSELL_ACTION_TYPE.CREATE_UPSELL_OK,
            upsells: data,
          })),
          catchError(() => of({ type: UPSELL_ACTION_TYPE.CREATE_UPSELL_KO }))
        )
      )
    )
  );

  deleteUpsell$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPSELL_ACTION_TYPE.DELETE_UPSELL),
      switchMap((action: any) =>
        this.upsellService.deleteUpsell(action.id).pipe(
          map(() => ({
            type: UPSELL_ACTION_TYPE.DELETE_UPSELL_OK,
          })),
          catchError(() => of({ type: UPSELL_ACTION_TYPE.DELETE_UPSELL_KO }))
        )
      )
    )
  );
}

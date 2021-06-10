import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
// import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { PRODUCT_ACTION_TYPE } from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private readonly productService: ProductService
  ) {}

  loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST),
      switchMap(() => {
        return this.productService.getProductList().pipe(
          map((data) => ({
            type: PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_OK,
            products: data,
          })),
          catchError(() =>
            of({ type: PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_KO })
          )
        );
      })
    )
  );

  loadProductListByIds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_BY_IDS),
      switchMap((action: any) => {
        return this.productService.getProductListByIds(action.ids).pipe(
          map((data) => ({
            type: PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_BY_IDS_OK,
            products: data,
          })),
          catchError(() =>
            of({ type: PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_BY_IDS_KO })
          )
        );
      })
    )
  );
}

import { createReducer, on, select } from '@ngrx/store';
import { initialState, ProductState } from '.';
import { loadProductListByIdsOk, loadProductListOk } from './product.actions';

export const productReducer = createReducer(
  initialState,
  on(loadProductListOk, (state, { products }) => ({ ...state, products })),
  on(loadProductListByIdsOk, (state, { productsSelected }) => ({
    ...state,
    productsSelected,
  }))
);

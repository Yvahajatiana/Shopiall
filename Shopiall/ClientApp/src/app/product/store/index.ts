import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/AppState';
import { Product } from '../product.model';

export interface ProductState {
  products: Product[];
  productsSelected: Product[];
}

export const initialState = {
  products: [],
  productsSelected: [],
} as ProductState;

export const productFeatureKey = 'productState';
export const getstate =
  createFeatureSelector<AppState, ProductState>(productFeatureKey);
export const selectProductList = createSelector(
  getstate,
  (state: ProductState) => state.products
);

export const selectProductListByIds = createSelector(
  getstate,
  (state: ProductState) => state.productsSelected
);

export const getProductById = (id: number) =>
  createSelector(getstate, (state: ProductState) => {
    return state.products.find((x) => x.id === id);
  });

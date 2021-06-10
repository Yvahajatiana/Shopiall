import { createAction, props } from '@ngrx/store';
import { Product } from '../product.model';

export enum PRODUCT_ACTION_TYPE {
  LOAD_PRODUCT_LIST = '[Product] load product list',
  LOAD_PRODUCT_LIST_OK = '[Product] load product list success',
  LOAD_PRODUCT_LIST_KO = '[Product] load product list failed',
  LOAD_PRODUCT_LIST_BY_IDS = '[Product] load product list by id list',
  LOAD_PRODUCT_LIST_BY_IDS_OK = '[Product] load product list by id list success',
  LOAD_PRODUCT_LIST_BY_IDS_KO = '[Product] load product list by id list failed',
}

export const loadProductList = createAction(
  PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST
);
export const loadProductListKo = createAction(
  PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_KO
);
export const loadProductListOk = createAction(
  PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_OK,
  props<{ products: Product[] }>()
);

export const loadProductListByIds = createAction(
  PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_BY_IDS,
  props<{ ids: number[] }>()
);
export const loadProductListByIdsKo = createAction(
  PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_BY_IDS_KO
);
export const loadProductListByIdsOk = createAction(
  PRODUCT_ACTION_TYPE.LOAD_PRODUCT_LIST_BY_IDS_OK,
  props<{ productsSelected: Product[] }>()
);

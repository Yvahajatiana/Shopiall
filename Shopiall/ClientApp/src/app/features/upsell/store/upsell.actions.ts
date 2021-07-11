import { createAction, props } from '@ngrx/store';
import { Upsell } from '../upsell.model';

export enum UPSELL_ACTION_TYPE {
  LOAD_UPSELL_LIST = '[upsell] load list',
  LOAD_UPSELL_LIST_OK = '[upsell] load  list success',
  LOAD_UPSELL_LIST_KO = '[upsell] load list failed',
  LOAD_UPSELL_BY_ID = '[upsell] load by id',
  LOAD_UPSELL_BY_ID_OK = '[upsell] load by id success',
  LOAD_UPSELL_BY_ID_KO = '[upsell] load by id failed',
  CREATE_UPSELL = '[upsell] create',
  CREATE_UPSELL_OK = '[upsell] create success',
  CREATE_UPSELL_KO = '[upsell] create failed',
  UPDATE_UPSELL = '[upsell] update',
  UPDATE_UPSELL_OK = '[upsell] update success',
  UPDATE_UPSELL_KO = '[upsell] update failed',
  DELETE_UPSELL = '[upsell] delete',
  DELETE_UPSELL_OK = '[upsell] delete ok',
  DELETE_UPSELL_KO = '[upsell] delete ko',
}

export const loadUpsellList = createAction(UPSELL_ACTION_TYPE.LOAD_UPSELL_LIST);
export const loadUpsellListKo = createAction(
  UPSELL_ACTION_TYPE.LOAD_UPSELL_LIST_KO
);
export const loadUpsellListOk = createAction(
  UPSELL_ACTION_TYPE.LOAD_UPSELL_LIST_OK,
  props<{ upsells: Upsell[] }>()
);

export const loadUpsellById = createAction(
  UPSELL_ACTION_TYPE.LOAD_UPSELL_BY_ID,
  props<{ id: string }>()
);
export const loadUpsellByIdKo = createAction(
  UPSELL_ACTION_TYPE.LOAD_UPSELL_BY_ID_KO
);
export const loadUpsellByIdOk = createAction(
  UPSELL_ACTION_TYPE.LOAD_UPSELL_BY_ID_OK,
  props<{ upsell: Upsell }>()
);

export const createUpsell = createAction(
  UPSELL_ACTION_TYPE.CREATE_UPSELL,
  props<{ upsell: Upsell }>()
);
export const createUpsellKo = createAction(UPSELL_ACTION_TYPE.CREATE_UPSELL_KO);
export const createUpsellOk = createAction(
  UPSELL_ACTION_TYPE.CREATE_UPSELL_OK,
  props<{ upsell: Upsell }>()
);

export const updateUpsell = createAction(
  UPSELL_ACTION_TYPE.UPDATE_UPSELL,
  props<{ upsell: Upsell; id: string }>()
);
export const updateUpsellKo = createAction(UPSELL_ACTION_TYPE.UPDATE_UPSELL_KO);
export const updateUpsellOk = createAction(
  UPSELL_ACTION_TYPE.UPDATE_UPSELL_OK,
  props<{ upsell: Upsell }>()
);

export const deleteUpsell = createAction(
  UPSELL_ACTION_TYPE.DELETE_UPSELL,
  props<{ id: string }>()
);
export const deleteUpsellKo = createAction(UPSELL_ACTION_TYPE.DELETE_UPSELL_KO);
export const deleteUpsellOk = createAction(UPSELL_ACTION_TYPE.DELETE_UPSELL_OK);

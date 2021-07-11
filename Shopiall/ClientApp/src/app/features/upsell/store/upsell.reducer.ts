import { createReducer, on } from '@ngrx/store';
import { initialUpsellState } from '.';
import {
  createUpsellOk,
  loadUpsellByIdOk,
  loadUpsellListOk,
  updateUpsellOk,
} from './upsell.actions';

export const upsellReducer = createReducer(
  initialUpsellState,
  on(loadUpsellListOk, (state, { upsells }) => ({
    ...state,
    upsells: upsells,
  })),
  on(loadUpsellByIdOk, (state, { upsell }) => ({ ...state, upsell: upsell })),
  on(createUpsellOk, (state, { upsell }) => ({ ...state, upsell: upsell })),
  on(updateUpsellOk, (state, { upsell }) => ({ ...state, upsell: upsell }))
);

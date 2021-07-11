import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/AppState';
import { Upsell } from '../upsell.model';

export interface UpsellState {
  upsells: Upsell[];
  upsell: Upsell;
}

export const initialUpsellState: UpsellState = {
  upsell: undefined,
  upsells: [],
};

export const upsellFeatureKey = 'upsellState';
export const selectCommentFeature =
  createFeatureSelector<AppState, UpsellState>(upsellFeatureKey);
export const selectUpsellList = createSelector(
  selectCommentFeature,
  (state: UpsellState) => state.upsells
);

export const selectCurrentUpsell = createSelector(
  selectCommentFeature,
  (state: UpsellState) => state.upsell
);

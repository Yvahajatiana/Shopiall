import { CommentState } from './comment/stores';
import { UpsellState } from './upsell/store';

export interface AppState {
  commentState: CommentState;
  upsellState: UpsellState;
}

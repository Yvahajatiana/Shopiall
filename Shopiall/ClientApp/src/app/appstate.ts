import { CommentState } from './comment/stores';
import { ProductState } from './product/store';
import { UpsellState } from './upsell/store';

export interface AppState {
  commentState: CommentState;
  upsellState: UpsellState;
  productState: ProductState;
}

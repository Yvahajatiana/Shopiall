import { CommentState } from './features/comment/stores';
import { ProductState } from './features/product/store';
import { UpsellState } from './features/upsell/store';

export interface AppState {
  commentState: CommentState;
  upsellState: UpsellState;
  productState: ProductState;
}

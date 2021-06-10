import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productFeatureKey } from './store';
import { productReducer } from './store/product.reducer';
import { ProductEffects } from './store/product.effect';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(productFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [ProductService],
})
export class ProductModule {}

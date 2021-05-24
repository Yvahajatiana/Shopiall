import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { upsellFeatureKey } from './store';
import { UpsellEffects } from './store/upsell.effects';
import { upsellReducer } from './store/upsell.reducer';
import { UpsellListComponent } from './components/upsell-list/upsell-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from '@angular/material/card';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpsellFormComponent } from './components/upsell-form/upsell-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpsellListComponent, UpsellFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(upsellFeatureKey, upsellReducer),
    EffectsModule.forFeature([UpsellEffects]),
    MaterialModule,
    AgGridModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [UpsellListComponent],
})
export class UpsellModule {}

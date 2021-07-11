import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { upsellFeatureKey } from './store';
import { UpsellEffects } from './store/upsell.effects';
import { upsellReducer } from './store/upsell.reducer';
import { UpsellListComponent } from './components/upsell-list/upsell-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpsellFormComponent } from './components/upsell-form/upsell-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from '../product/product.module';
import { UpsellMainComponent } from './components/upsell-main/upsell-main.component';
import { UpsellRoutingModule } from './upsell.routes';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [UpsellListComponent, UpsellFormComponent, UpsellMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(upsellFeatureKey, upsellReducer),
    EffectsModule.forFeature([UpsellEffects]),
    MaterialModule,
    AgGridModule,
    NgSelectModule,
    NgbModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    UpsellRoutingModule,
    NgxDatatableModule,
  ],
  exports: [UpsellMainComponent],
})
export class UpsellModule {}

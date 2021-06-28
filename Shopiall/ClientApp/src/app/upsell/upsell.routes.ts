import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpsellFormComponent } from './components/upsell-form/upsell-form.component';
import { UpsellListComponent } from './components/upsell-list/upsell-list.component';
import { UpsellMainComponent } from './components/upsell-main/upsell-main.component';

export const UPSELL_ROUTES: Routes = [
  {
    path: '',
    component: UpsellMainComponent,
    children: [
      {
        path: 'create',
        component: UpsellFormComponent,
      },
      {
        path: 'edit/:upsellId',
        component: UpsellFormComponent,
      },
      {
        path: '',
        component: UpsellListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(UPSELL_ROUTES)],
  exports: [RouterModule],
})
export class UpsellRoutingModule {}

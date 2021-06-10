import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent,
    children: [
      {
        path: 'upsells',
        loadChildren: () =>
          import('./upsell/upsell.module').then((x) => x.UpsellModule),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('./comment/comment.module').then((x) => x.CommentModule),
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './core/auth.guard';
import { NoAuthGuard } from './core/no-auth.guard';
import { BaseComponent } from './layout/base/base.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'upsells',
        loadChildren: () =>
          import('./features/upsell/upsell.module').then((x) => x.UpsellModule),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('./features/comment/comment.module').then(
            (x) => x.CommentModule
          ),
      },
    ],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        (x) => x.AuthenticationModule
      ),
    canActivate: [NoAuthGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

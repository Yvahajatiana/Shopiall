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
        canActivate: [AuthGuard],
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('./comment/comment.module').then((x) => x.CommentModule),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './core/auth.guard';
import { NoAuthGuard } from './core/no-auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

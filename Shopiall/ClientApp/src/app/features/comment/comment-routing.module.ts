import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CommentImportComponent } from './comment-import/comment-import.component';
import { CommentMainComponent } from './comment-main/comment-main.component';

export const routes: Routes = [
  {
    path: '',
    component: CommentMainComponent,
    children: [
      {
        path: 'import',
        component: CommentImportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}

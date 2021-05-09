import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentMainComponent } from './comment-main/comment-main.component';

@NgModule({
  declarations: [CommentMainComponent],
  imports: [CommonModule],
  exports: [CommentMainComponent],
})
export class CommentModule {}

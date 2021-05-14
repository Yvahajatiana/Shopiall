import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentMainComponent } from './comment-main/comment-main.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [CommentMainComponent],
  imports: [CommonModule, AgGridModule.withComponents([])],
  exports: [CommentMainComponent],
})
export class CommentModule {}

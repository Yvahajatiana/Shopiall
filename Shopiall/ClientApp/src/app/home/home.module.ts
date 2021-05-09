import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CommentModule } from '../comment/comment.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModule, CommentModule],
  exports: [HomeComponent],
})
export class HomeModule {}

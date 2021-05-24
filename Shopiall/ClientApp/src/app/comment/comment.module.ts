import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentMainComponent } from './comment-main/comment-main.component';
import { AgGridModule } from 'ag-grid-angular';
import { commentFeatureKey } from './stores';
import { StoreModule } from '@ngrx/store';
import { commentReducer } from './stores/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffect } from './stores/effects';
import { CommentService } from './services/comment.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { CommentImportComponent } from './comment-import/comment-import.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentMainComponent, CommentImportComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    StoreModule.forFeature(commentFeatureKey, commentReducer),
    EffectsModule.forFeature([CommentEffect]),
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [CommentMainComponent],
  providers: [CommentService],
})
export class CommentModule {}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommentImportComponent } from '../comment-import/comment-import.component';
import { CommentService } from '../services/comment.service';
import { selectComments } from '../stores';
import { loadComment } from '../stores/actions';
import { columnDefs } from './comment-main.model';

@Component({
  selector: 'app-comment-main',
  templateUrl: './comment-main.component.html',
  styleUrls: ['./comment-main.component.css'],
  providers: [CommentService],
})
export class CommentMainComponent implements OnInit {
  comments$: Observable<Comment[]>;
  columnDefs = columnDefs;

  constructor(
    private commentService: CommentService,
    private readonly store: Store,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.store.dispatch(loadComment());
    this.comments$ = this.store.pipe(select(selectComments));
  }

  onImportClick(): void {
    this.dialog.open(CommentImportComponent);
  }
}

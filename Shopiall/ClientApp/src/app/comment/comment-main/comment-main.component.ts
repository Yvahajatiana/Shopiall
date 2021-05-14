import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-main',
  templateUrl: './comment-main.component.html',
  styleUrls: ['./comment-main.component.css'],
  providers: [CommentService],
})
export class CommentMainComponent implements OnInit {
  columnDefs = [
    { field: 'userName' },
    { field: 'productId' },
    { field: 'rating' },
    { field: 'content' },
  ];

  rowData = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments().subscribe((x) => (this.rowData = x));
  }
}

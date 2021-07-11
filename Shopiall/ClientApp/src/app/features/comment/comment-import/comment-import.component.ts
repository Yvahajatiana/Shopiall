import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../comment-main/comment-main.model';

@Component({
  selector: 'app-comment-import',
  templateUrl: './comment-import.component.html',
  styleUrls: ['./comment-import.component.css'],
})
export class CommentImportComponent implements OnInit {
  products: Product[] = [
    {
      id: 75694522,
      title: 'Product N 1',
    },
    {
      id: 75664522,
      title: 'Product N 2',
    },
    {
      id: 75694542,
      title: 'Product N 3',
    },
  ];
  htmlComments = '';
  selectedProductId = -1;
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.formBuilder.group({
      selectedProductId: [],
      htmlComments: [''],
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/comment/comment-main/comment-main.model';

@Component({
  selector: 'app-upsell-form',
  templateUrl: './upsell-form.component.html',
  styleUrls: ['./upsell-form.component.css'],
})
export class UpsellFormComponent implements OnInit {
  products$: Observable<Product[]>;
  formGroup: FormGroup;
  constructor(private store: Store, private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.products$ = of([
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
    ]);
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      ownerProductId: [],
      title: [],
      primaryText: [],
      secondaryText: [],
      productIds: [[]],
    });
  }
}

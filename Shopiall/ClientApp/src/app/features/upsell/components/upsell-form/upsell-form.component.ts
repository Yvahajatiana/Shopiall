import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of, ReplaySubject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import { Product } from 'src/app/features/product/product.model';
import { selectProductList } from 'src/app/features/product/store';
import { loadProductList } from 'src/app/features/product/store/product.actions';
import { isNullOrUndefined } from 'src/app/shared/helpers/instance.helpers';
import { selectCurrentUpsell } from '../../store';
import {
  createUpsell,
  loadUpsellById,
  updateUpsell,
  UPSELL_ACTION_TYPE,
} from '../../store/upsell.actions';
import { Upsell } from '../../upsell.model';

@Component({
  selector: 'app-upsell-form',
  templateUrl: './upsell-form.component.html',
  styleUrls: ['./upsell-form.component.css'],
})
export class UpsellFormComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  formGroup: FormGroup;
  currentUpsellId: string;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  formTitle = 'Add new Upsell';
  isCreation = true;
  mainUrl = '/dashboard/upsells/';

  constructor(
    private store: Store,
    private readonly fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.initRouteParams();
    this.initForm();
    this.initSubscriptions();
  }

  // TODO: add a form validations
  initForm(): void {
    this.initEmptyFb();
    // TODO: do not dispatch loadProductList when the productList is recently updated
    this.store.dispatch(loadProductList());
    if (!this.isCreation) {
      this.store.dispatch(loadUpsellById({ id: this.currentUpsellId }));
    }
    this.products$ = this.store.pipe(select(selectProductList));
  }

  initSubscriptions(): void {
    this.actions$
      .pipe(
        ofType(
          UPSELL_ACTION_TYPE.CREATE_UPSELL_OK,
          UPSELL_ACTION_TYPE.UPDATE_UPSELL_OK
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.goback());

    // TODO: this subscription is for edit only, disable it for upsell creation
    if (!this.isCreation) {
      this.store
        .pipe(select(selectCurrentUpsell), takeUntil(this.destroyed$))
        .subscribe((upsell) => {
          this.updateTitle(upsell);
          this.updateFormValue(upsell);
          this.currentUpsellId = upsell.id;
        });
    }
  }

  initRouteParams(): void {
    const routeMaps = this.route.snapshot.paramMap;
    const upsellId = routeMaps.get('upsellId');
    this.isCreation = isNullOrUndefined(upsellId);
    this.currentUpsellId = upsellId;
  }

  initEmptyFb(): void {
    this.formGroup = this.fb.group({
      title: [],
      primaryText: [],
      secondaryText: [],
      productIds: [[]],
    });
  }

  updateFormValue(upsell: Upsell): void {
    this.formGroup.patchValue(
      {
        title: upsell.title,
        primaryText: upsell.primaryText,
        secondaryText: upsell.secondaryText,
        productIds: upsell.productIds,
      },
      { emitEvent: false, onlySelf: true }
    );
  }

  updateTitle(upsell: Upsell) {
    this.formTitle = `Edit upsell: ${upsell.title}`;
  }

  // TODO: do not save an empty form, ie disable save btn when form is empty
  saveUpsell(): void {
    if (isNullOrUndefined(this.formGroup.value)) {
      return;
    }
    if (this.isCreation) {
      this.store.dispatch(createUpsell({ upsell: this.formGroup.value }));
    } else {
      this.store.dispatch(
        updateUpsell({
          id: this.currentUpsellId,
          upsell: this.formGroup.value,
        })
      );
    }
  }

  goback(): void {
    this.router.navigate([this.mainUrl]);
  }

  // TODO: check if the user have a change, if true show confirm dialog else redirect
  cancelChange(): void {
    if (!confirm('Are sure to exit without save?')) {
      return;
    }
    this.goback();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

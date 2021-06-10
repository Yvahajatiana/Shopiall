import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of, ReplaySubject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import { Product } from 'src/app/product/product.model';
import { selectProductList } from 'src/app/product/store';
import { loadProductList } from 'src/app/product/store/product.actions';
import { isNullOrUndefined } from 'src/app/shared/helpers/instance.helpers';
import { selectCurrentUpsell } from '../../store';
import {
  createUpsell,
  loadUpsellById,
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
  currentUpsell: Upsell;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  formTitle = 'Add new Upsell';
  isCreateNewUpsell = true;

  constructor(
    private store: Store,
    private readonly fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initSubscriptions();
    this.initRouteParams();
  }

  // TODO: add a form validations
  initForm(): void {
    this.formGroup = this.fb.group({
      ownerProductId: [],
      title: [],
      primaryText: [],
      secondaryText: [],
      productIds: [[]],
    });

    this.store.dispatch(loadProductList());
    this.products$ = this.store.pipe(select(selectProductList));
  }

  initSubscriptions(): void {
    this.formGroup.valueChanges.subscribe((formValue) => {
      this.setUpsellInstance(formValue);
      console.log(this.formGroup);
    });
    this.actions$
      .pipe(
        ofType(UPSELL_ACTION_TYPE.CREATE_UPSELL_OK),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.redirectAfterSave());

    // TODO: this subscription is for edit only, disable it for upsell creation
    this.store
      .pipe(select(selectCurrentUpsell), skip(1), takeUntil(this.destroyed$))
      .subscribe((upsell) => {
        this.updateTitle(upsell);
        this.updateFbValues(upsell);
      });
  }

  initRouteParams(): void {
    const routeMaps = this.route.snapshot.paramMap;
    const upsellId = routeMaps.get('upsellId');
    if (isNullOrUndefined(upsellId)) {
      return;
    }
    console.log(upsellId);
    this.store.dispatch(loadUpsellById({ id: upsellId }));
    this.isCreateNewUpsell = false;
  }

  updateFbValues(currentUpsell: Upsell) {
    this.formGroup.patchValue({
      ownerProductId: currentUpsell.ownerProduct,
      title: currentUpsell.title,
      primaryText: currentUpsell.primaryText,
      secondaryText: currentUpsell.secondaryText,
      productIds: currentUpsell.productIds,
    });

    console.log(this.formGroup);
  }

  updateTitle(upsell: Upsell) {
    this.formTitle = `Edit upsell: ${upsell.title}`;
  }

  // TODO: do not save an empty form, ie disable save btn when form is empty
  saveUpsell(): void {
    if (isNullOrUndefined(this.currentUpsell)) {
      return;
    }
    this.store.dispatch(createUpsell({ upsell: this.currentUpsell }));
  }

  cancelChange(): void {
    this.createUpsellInstance();
  }

  setUpsellInstance(formValue: any): void {
    if (isNullOrUndefined(this.currentUpsell)) {
      this.createUpsellInstance();
    }
    this.currentUpsell.ownerProduct = formValue.ownerProductId;
    this.currentUpsell.primaryText = formValue.primaryText;
    this.currentUpsell.productIds = formValue.productIds;
    this.currentUpsell.secondaryText = formValue.secondaryText;
    this.currentUpsell.title = formValue.title;
  }

  createUpsellInstance(): void {
    this.currentUpsell = {} as Upsell;
  }

  redirectAfterSave(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // TODO: check if the user have a change, if true show confirm dialog else redirect
  back(): void {
    console.log(this.currentUpsell);
    if (
      !isNullOrUndefined(this.currentUpsell) &&
      !confirm('Are sure to exit without save?')
    ) {
      return;
    }
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

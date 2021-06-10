import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'src/app/shared/helpers/instance.helpers';
import { selectUpsellList } from '../../store';
import { deleteUpsell, loadUpsellList } from '../../store/upsell.actions';
import { colDefs, Upsell } from '../../upsell.model';

@Component({
  selector: 'app-upsell-list',
  templateUrl: './upsell-list.component.html',
  styleUrls: ['./upsell-list.component.css'],
})
export class UpsellListComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  upsellList$: Observable<Upsell[]>;
  columnDefs = colDefs;
  selectedUpsell: Upsell;
  constructor(
    private store: Store,
    private roter: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tableInit();
  }

  tableInit(): void {
    this.store.dispatch(loadUpsellList());
    this.upsellList$ = this.store.pipe(select(selectUpsellList));
  }

  create(): void {
    this.roter.navigateByUrl('create');
  }

  edit(): void {
    this.roter.navigate(['edit', this.selectedUpsell.id], {
      relativeTo: this.route,
    });
  }

  remove(): void {
    if (isNullOrUndefined(this.selectedUpsell)) {
      return;
    }
    if (!confirm(`Are you sure to delete: ${this.selectedUpsell.title}`)) {
      return;
    }
    this.store.dispatch(deleteUpsell({ id: this.selectedUpsell.id }));
    this.store.dispatch(loadUpsellList());
    this.reset();
  }

  onSelectionChanged(): void {
    const selectedRows: Upsell[] = this.gridApi.getSelectedRows();
    if (isNullOrUndefined(selectedRows)) {
      return;
    }
    this.selectedUpsell = selectedRows[0];
    console.log(this.selectedUpsell);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  reset(): void {
    this.selectedUpsell = undefined;
  }
}

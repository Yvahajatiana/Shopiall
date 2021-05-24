import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUpsellList } from '../../store';
import { loadUpsellList } from '../../store/upsell.actions';
import { colDefs, Upsell } from '../../upsell.model';

@Component({
  selector: 'app-upsell-list',
  templateUrl: './upsell-list.component.html',
  styleUrls: ['./upsell-list.component.css'],
})
export class UpsellListComponent implements OnInit {
  upsellList$: Observable<Upsell[]>;
  columnDefs = colDefs;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tableInit();
  }

  tableInit(): void {
    this.store.dispatch(loadUpsellList());
    this.upsellList$ = this.store.pipe(select(selectUpsellList));
  }
}

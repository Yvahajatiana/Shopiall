import { ColumnDef } from '../shared/models/table.model';

export interface Upsell {
  id: string;
  title: string;
  ownerProduct: string;
  primaryText: string;
  secondaryText: string;
  productIds: string;
}

export const colDefs = [
  {
    field: 'title',
    headerName: 'Titre',
    checkboxSelection: true,
    resizable: true,
  } as ColumnDef,
  {
    field: 'primaryText',
    headerName: 'Texte principal',
  } as ColumnDef,
  {
    field: 'secondaryText',
    headerName: 'Texte secondaire',
  } as ColumnDef,
  {
    field: 'ownerProduct',
    headerName: 'Belong to',
  } as ColumnDef,
  {
    field: 'productIds',
    headerName: 'With products',
  } as ColumnDef,
];

export interface ColumnDef {
  headerName: string;
  field: string;

  filter?: any;
  type?: string;
  sortable?: boolean;
  checkboxSelection?: boolean;
  resizable?: boolean;
}

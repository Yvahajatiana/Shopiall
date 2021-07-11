export const columnDefs = [
  { field: 'productId', headerName: 'Product' },
  { field: 'userName', headerName: 'User' },
  { field: 'rating', headerName: 'Rating' },
  { field: 'content', headerName: 'Comment' },
];

export interface Product {
  id: number;
  title: string;
}

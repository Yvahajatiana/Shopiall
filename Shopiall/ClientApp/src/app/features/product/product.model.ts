export interface Product {
  id: number;
  title: string;
  image: Image;
  variants: Variant[];
}

export interface Image {
  atl: string;
  height: number;
  width: number;
  src: string;
}

export interface Variant {
  position: number;
  title: string;
  price: number;
}

export interface ProductApiRequest {
  productIds: number[];
}

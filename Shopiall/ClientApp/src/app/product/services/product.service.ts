import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductApiRequest } from '../product.model';
import { ProductModule } from '../product.module';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/product/');
  }

  getProductListByIds(request: ProductApiRequest): Observable<Product[]> {
    return this.httpClient.post<Product[]>('/api/product/', request);
  }
}

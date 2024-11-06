import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

interface ShoppingListResponse {
  'shopping-list': Product[]; 
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<ShoppingListResponse>(this.apiUrl);
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product) {
    return this.httpClient.put<Product>(
      `${this.apiUrl}/${product.id}`,
      product
    );
  }

  deleteProduct(id: number) {
    return this.httpClient.delete<Product>(`${this.apiUrl}/${id}`);
  }
}

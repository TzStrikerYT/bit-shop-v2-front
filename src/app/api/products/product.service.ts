import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlApi = `${environment.API_URI}/product`
  productToCreate: Product = new Product()
  allProducts: Product[] = []

  constructor(private http: HttpClient) { }
}

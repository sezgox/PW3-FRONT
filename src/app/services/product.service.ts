import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppUrl: string;
  private myApiUrl: string = '';

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.getProducts();
  }

  getProducts(): Observable<Product[]> {
    this.myApiUrl = 'api/products';
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }

}

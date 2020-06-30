import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './shared/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  //get all products
  getProducts():Observable<Product[]>{
    
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
}

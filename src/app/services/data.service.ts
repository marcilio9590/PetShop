import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(public http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>('http://localhost:3000/v1/products');
    }
}
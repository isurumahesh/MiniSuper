import { HttpClient } from '@angular/common/http';
import { ProductModel } from './../models/productModel';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  private productUrl = 'api/products';

  saveProduct(product: ProductModel) {
    return this.http.post(`${this.productUrl}`, product).catch(this.errorHandler);
  }

  updateProduct(product: ProductModel) {
    return this.http.put(`${this.productUrl}`, product).catch(this.errorHandler);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get(`${this.productUrl}`).catch(this.errorHandler);
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.http.get(`${this.productUrl}/${id}`).catch(this.errorHandler);;
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.productUrl}/${id}`).catch(this.errorHandler);;
  }

  protected errorHandler(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.error.result ? error.error.result : error.statusText;
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}

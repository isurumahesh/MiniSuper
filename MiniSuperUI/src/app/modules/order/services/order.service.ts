import { OrderModel } from './../models/orderModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  private orderUrl = 'api/Orders';

  saveOrder(order: OrderModel) {
    return this.http.post(`${this.orderUrl}`, order).catch(this.errorHandler);
  }

  updateOrder(order: OrderModel) {
    return this.http.put(`${this.orderUrl}`, order).catch(this.errorHandler);
  }

  getOrders(): Observable<OrderModel[]> {
    return this.http.get(`${this.orderUrl}`).catch(this.errorHandler);
  }

  getOrder(id: number): Observable<OrderModel> {
    return this.http.get(`${this.orderUrl}/${id}`).catch(this.errorHandler);;
  }

  deleteOrder(id: number) {
    return this.http.delete(`${this.orderUrl}/${id}`).catch(this.errorHandler);;
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { CustomerModel } from '../models/customerModel';


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  private customerUrl = 'api/customers';

  saveCustomer(customer: CustomerModel) {
    return this.http.post(`${this.customerUrl}`, customer).catch(this.errorHandler);
  }

  updateCustomer(customer: CustomerModel) {
    return this.http.put(`${this.customerUrl}`, customer).catch(this.errorHandler);
  }

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get(`${this.customerUrl}`).catch(this.errorHandler);
  }

  getCustomer(id: number): Observable<CustomerModel> {
    return this.http.get(`${this.customerUrl}/${id}`).catch(this.errorHandler);;
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.customerUrl}/${id}`).catch(this.errorHandler);;
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

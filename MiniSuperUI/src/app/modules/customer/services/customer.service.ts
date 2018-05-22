import { Injectable } from '@angular/core';
import { HttpClient,Response } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { CustomerModel } from '../models/customerModel';


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  private customerUrl = 'api/customers';

  saveCustomer(customer: CustomerModel) {
    return this.http.post(`${this.customerUrl}`, customer).map(res => res).catch(this.errorHandler);
  }

  getCustomers() {
    return this.http.get(this.customerUrl).map(res => res);
  }


  protected errorHandler(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
  
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.error.result ? error.error.result  : error.statusText;
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

import { CustomerModel } from './../models/customerModel';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customers: CustomerModel[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(res => {
      this.customers = res;
    }, error => {

    }, () => {

    })
  }

  editCustomer(id: number) {

  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(res => {

    }, error => {

    },
      () => {

      })
  }

}

import { CustomerModel } from './../models/customerModel';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customers: CustomerModel[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(res => {
      this.customers = res;
      console.log(res)
    }, error => {

    }, () => {

    })

  }

  editCustomer(id: number) {
    this.router.navigate(['/customer/updateCustomer', id])
  }

  deleteCustomer(customer: CustomerModel) {
    let deleteIndex = this.customers.indexOf(customer);

    this.customerService.deleteCustomer(customer.id).subscribe(res => {
      this.customers.splice(deleteIndex, 1);
    }, error => {

    },
      () => {

      })
  }

}

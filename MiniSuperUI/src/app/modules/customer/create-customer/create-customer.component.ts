import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerModel } from '../models/customerModel';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer = new CustomerModel();
  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit() {

    this.createCustomerForm();


  }

  saveCustomer() {
    this.customer = Object.assign({}, this.customerForm.value)
    console.log(this.customer)

    this.customerService.saveCustomer(this.customer).subscribe(res => {
      this.getCustomers();
    }, error => {

    })
    console.log(this.customerForm)

  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(res => console.log(res))
  }

  private createCustomerForm() {
    this.customerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: "",
      address: "",
      mobileNo: "",
      email: "",
    })
  }

}



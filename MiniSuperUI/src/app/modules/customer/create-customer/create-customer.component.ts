import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit() {

    this.createCustomerForm();
    this.customerService.getCustomers().subscribe(res => console.log(res))

  }
 
  saveCustomer() {
    console.log(this.customerForm)
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



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.createCustomerForm();
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



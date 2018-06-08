import { CustomerModel } from './../models/customerModel';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer = new CustomerModel();
  customerId = 0;
  constructor(private fb: FormBuilder, private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.customerId = params['id'];

      if (this.customerId != undefined) {
        this.getCustomer(this.customerId);
      }
    });

    this.createCustomerForm();
  }

  saveCustomer() {

    if (this.customerId == 0 || this.customerId == undefined) {
      this.customer = Object.assign({}, this.customerForm.value)
      console.log(this.customer)

      this.customerService.saveCustomer(this.customer).subscribe(res => {
        this.getCustomers();
      }, error => {

      })
      console.log(this.customerForm)
    }

    else {
      this.updateCustomer();
    }


  }

  updateCustomer() {
    this.customer = Object.assign({}, this.customerForm.value);
    this.customerService.updateCustomer(this.customer).subscribe(res => {
      this.router.navigate(['/customer'])
    }, error => { })
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(res => console.log(res))
  }

  getCustomer(id: number) {
    this.customerService.getCustomer(id).subscribe(res => {
      this.customer = res;
      this.patchCustomerForm(this.customer);
      console.log(res)
    }
      , error => { })
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

  private patchCustomerForm(customer: CustomerModel) {
    this.customerForm.patchValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      mobileNo: customer.mobileNo,
      email: customer.email

    })
  }

}



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.customerForm = this.fb.group({
      firstName: ["",[Validators.required,Validators.minLength(3)]],
      lastName: "",
      address: "",
      mobileNo: "",
      email: "",
      notification: "email",
    })
  }


  setNotification(notifiy) {
    
        let phone = this.customerForm.get('mobileNo');
    
        if (notifiy == "text") {
          phone.setValidators(Validators.required)
        }
        else {
          phone.clearValidators();
        }
    
        phone.updateValueAndValidity();
      }
}



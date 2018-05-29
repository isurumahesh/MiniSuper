import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './services/customer.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  //  RouterModule.forChild(routes),
    ReactiveFormsModule,
    CustomerRoutingModule
  ],
  declarations: [CreateCustomerComponent, CustomerDetailsComponent, CustomerComponent],
  providers: [CustomerService],
  exports: []
})
export class CustomerModule { }

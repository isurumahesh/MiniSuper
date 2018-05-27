import { CustomerService } from './services/customer.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


export const routes: Routes = [
 
  {
    path: '', component: CustomerDetailsComponent,
  },
  {
    path: 'createCustomer', component: CreateCustomerComponent,
  },
  {
    path: 'updateCustomer/:id', component: CreateCustomerComponent
  },


];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  //  RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [CreateCustomerComponent, CustomerDetailsComponent],
  providers: [CustomerService],
  exports: []
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './modules/customer/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './modules/customer/customer-details/customer-details.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/customer', pathMatch: 'full',
  },
  {
    path: 'customer', component: CustomerDetailsComponent,
  },
  {
    path: 'createCustomer', component: CreateCustomerComponent,
  },
  {
    path: 'updateCustomer/:id', component: CreateCustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './modules/customer/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './modules/customer/customer-details/customer-details.component';

const routes: Routes = [
  {
    path: '', component: CustomerDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

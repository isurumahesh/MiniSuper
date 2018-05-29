import { CustomerComponent } from './customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const customRoutes: Routes = [
 {
        path: 'customer',
        component: CustomerComponent, 
        children: [
            { path: '', component: CustomerDetailsComponent },         
            { path: 'createCustomer', component: CreateCustomerComponent },
            { path: 'updateCustomer/:id', component: CreateCustomerComponent }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(customRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

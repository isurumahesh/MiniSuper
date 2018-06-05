import { OrderComponent } from './order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const customRoutes: Routes = [
 {
        path: 'order',
        component: OrderComponent, 
        children: [
            { path: '', component: OrderDetailsComponent },         
            { path: 'createOrder', component: CreateOrderComponent },
            { path: 'updateOrder/:id', component: CreateOrderComponent }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(customRoutes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

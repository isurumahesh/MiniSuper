import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderService } from './services/order.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [CreateOrderComponent, OrderDetailsComponent,OrderComponent],
  providers: [OrderService]
})
export class OrderModule { }

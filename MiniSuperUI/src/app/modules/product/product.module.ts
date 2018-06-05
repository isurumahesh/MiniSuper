import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CreateProductComponent, ProductDetailsComponent],
  providers: [ProductService]
})
export class ProductModule { }

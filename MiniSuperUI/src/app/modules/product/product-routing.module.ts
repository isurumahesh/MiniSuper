import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const productRoutes: Routes = [
  { path: '', component: ProductDetailsComponent },
  { path: 'createProduct', component: CreateProductComponent },
  { path: 'updateProduct/:id', component: CreateProductComponent }


];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

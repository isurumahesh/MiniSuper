import { ProductService } from './../services/product.service';
import { ProductModel } from './../models/productModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      console.log(res)
    }, error => {

    }, () => {

    })
  }

  editProduct(id: number) {

  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(res => {

    }, error => {

    },
      () => {

      })
  }

}

import { ProductModel } from './../models/productModel';
import { ProductService } from './../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;
  product = new ProductModel();
  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.createProductForm();
  }

  saveProduct() {
    this.product = Object.assign({}, this.productForm.value)
    console.log(this.product)

    this.productService.saveProduct(this.product).subscribe(res => {
      this.getProducts();
    }, error => {

    })
    console.log(this.productForm)

  }

  getProducts() {
    this.productService.getProducts().subscribe(res => console.log(res))
  }

  private createProductForm() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required]

    })
  }

}

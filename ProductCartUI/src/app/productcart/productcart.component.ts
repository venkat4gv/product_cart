import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { ProductServices } from '../Services/product-services.service';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {

  categories: Category[] = [];
  products: Product[]= [];
  selectedCategory: string = '';
  selectedProduct: string = '';
  constructor(private productServices: ProductServices) {

  }

  ngOnInit(): void {
    this.productServices.getAllCategories().subscribe( (response) => {
      if(response) {
        (response as Array<Category>).forEach(element => {
          this.categories.push(element);
        });
      }
    });
  }

  loadProducts(category: string) {
    this.products = [];
    this.productServices.getProducts(category).subscribe( (response) => {
      if(response) {
        (response as Array<Product>).forEach(element => {
          this.products.push(element);
        });
      }
    });
  }

}

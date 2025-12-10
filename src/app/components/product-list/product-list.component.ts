import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  product: Product = {
    ProductID: 0,
    ProductCode: '',
    ProductName: '',
    TotalStock: 0,
    IsFavourite: false,
    Active: true,
  };
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
  submit() {
    this.productService.createProduct(this.product).subscribe({
      next: () => {
        alert('Product created!')
        this.getProducts();
      }
        
        ,
      error: (err) => console.error(err),
    });
  }
}

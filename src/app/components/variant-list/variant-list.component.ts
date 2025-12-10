import { Component } from '@angular/core';
import { ListVariant, Variant } from '../../models/variant.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VariantService } from '../../services/variant.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-variant-list',
  standalone: true,
  imports: [CommonModule, FormsModule,NgFor],
  templateUrl: './variant-list.component.html',
  styleUrl: './variant-list.component.css',
})
export class VariantListComponent {
  variant: Variant = {
    ProductID: '',
    Name: '',
  };
  loading = true;
   products: Product[] = [];
   variants: ListVariant[] = [];
   
  ngOnInit(): void {
    this.getProducts();
    this.getVariants();
  }

  constructor(private variantService: VariantService,private productService: ProductService) {}
  submit() {
    this.variantService.createVariant(this.variant).subscribe({
      next: () => {
        alert('Variant created!');
        this.getVariants();
      },

      error: (err) => console.error(err),
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        
      },
      error: () => (this.loading = false),
    });
  }
   getVariants() {
    this.variantService.getVariants().subscribe({
      next: (res) => {
        this.variants = res.data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}

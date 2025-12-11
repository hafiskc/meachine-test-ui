import { Component } from '@angular/core';
import { ListVariantOption, VariantOption } from '../../models/variant-option.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VariantService } from '../../services/variant.service';
import { VariantOptionService } from '../../services/variant-option.service';
import { Variant } from '../../models/variant.model';

@Component({
  selector: 'app-variant-option-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './variant-option-list.component.html',
  styleUrl: './variant-option-list.component.css'
})
export class VariantOptionListComponent {
variantOptions: ListVariantOption[] = [];
 variantOption: VariantOption = {
    VariantID: '',
    Value: '',
  };
  variants:Variant[] = []
    loading = true;
    ngOnInit(): void {
      this.getVariantOptions();
      this.getVariants();
    }
  
    constructor(private variantService: VariantService,private variantOptionService: VariantOptionService) {}
    submit() {
      this.variantOptionService.createVariantOption(this.variantOption).subscribe({
        next: () => {
          alert('Variant Option created!');
           this.getVariantOptions();
        },
  
        error: (err) => console.error(err),
      });
    }
    getVariantOptions() {
      this.variantOptionService.getVariantOptions().subscribe({
        next: (res) => {
          this.variantOptions = res.data;
          
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

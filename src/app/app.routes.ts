import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { VariantListComponent } from './components/variant-list/variant-list.component';
import { VariantOptionListComponent } from './components/variant-option-list/variant-option-list.component';

export const routes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'variants',component: VariantListComponent},
    {path: 'variantoptions',component: VariantOptionListComponent},
];

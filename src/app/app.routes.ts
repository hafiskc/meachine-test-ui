import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { VariantListComponent } from './components/variant-list/variant-list.component';

export const routes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'variants',component: VariantListComponent}
];

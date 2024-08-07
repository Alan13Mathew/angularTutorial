import { Routes } from '@angular/router';
import { Samp1Component } from './components/samp1/samp1.component';
import { Samp2Component } from './components/samp2/samp2.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsDisplayComponent } from './components/products-display/products-display.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/samp1',
        pathMatch: 'full'
    },
    {
        path: 'samp1',
        component: Samp1Component
    },
    {
        path: 'samp2',
        component: Samp2Component
    },
    {
        path: 'products',
        component: ProductsDisplayComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsDisplayComponent } from './components/products-display/products-display.component';
import { Samp1Component } from './components/samp1/samp1.component';
import { Samp2Component } from './components/samp2/samp2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ProductsDisplayComponent,
    Samp1Component,
    Samp2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

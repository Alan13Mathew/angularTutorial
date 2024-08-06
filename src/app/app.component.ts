import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsDisplayComponent } from './components/products-display/products-display.component';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ProductsDisplayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

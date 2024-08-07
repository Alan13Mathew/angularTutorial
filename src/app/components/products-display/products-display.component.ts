import { Component, OnChanges } from '@angular/core';
import { Product } from '../../models/product';
import { ProductDataService } from '../../services/product-data.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-display',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.css'
})
export class ProductsDisplayComponent implements OnChanges{
    products: Product[] = [];
    filterProduct!: Product[];
    filterProductByPrice!: Product[];
    filterProductByMfg!: Product[];
    selectedDiv: boolean = false;
    newProduct: Product = {
      name: '',
      price: 0,
      mfg: '',
      exp: '',
      desc: ''
    }
    searchKey:string = '';
    searchPrice: number = 0;
    searchMfg: string = ''
    
    constructor(private productServing: ProductDataService){
      this.products = productServing.getProducts();
      this.filterProduct = this.products;
      this.filterProductByPrice = this.products;

    }
    ngOnChanges(){
      console.log('changes');
    }
    deleteProduct(index: number){
      console.log(`${index} clicked`);
      console.log(this.productServing.removeProduct(index));
    }
    search(){
      console.log(this.searchKey);
      this.products = this.filterProduct.filter(x=> x.name.toLowerCase().includes(this.searchKey.toLowerCase()));
    }
    selectAdvance(){
      this.selectedDiv = !this.selectedDiv;
    }
    searchByprice(){
      if(this.searchPrice != 0){
        this.products = this.filterProductByPrice.filter(y=> y.price == this.searchPrice);
      }
      
    }
    searchByMfg(){

    }
}

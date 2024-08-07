import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-samp1',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './samp1.component.html',
  styleUrl: './samp1.component.css'
})
export class Samp1Component {
  data1: string = '';
  data2: string =  '';

  constructor(private route: Router){}
  passDatas(){
    this.route.navigate(['/samp2']);
  }
}

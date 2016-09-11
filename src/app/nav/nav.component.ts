import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styles: [`
    :host {
       background-color: #f48fb1;
       font-family: 'Lobster', cursive;
       margin-bottom:60px;
    }
    h1 {
        text-align:center;
        font-size:30px
    }
  `] 
})
export class NavComponent {

  constructor(){

  }

  ngOnInit() {
   
  }

}
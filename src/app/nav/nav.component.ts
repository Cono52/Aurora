import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styles: [`
    :host {
       background-color: grey;
       padding: 10px;
       margin-bottom:10px;
       font-family: 'Lobster', cursive;
    }
    h1 {
        margin:0px;
        text-align:center;
    }
  `] 
})
export class NavComponent {

  constructor(){

  }

  ngOnInit() {
   
  }

}
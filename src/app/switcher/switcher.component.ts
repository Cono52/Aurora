import { Component } from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styles: [`
    :host div{
       display: flex;
       align-items: center;
       justify-content: center;
    }
    :host div button{
       color: #e91e63;
       display: flex;
       align-items: center;
       justify-content: center;
       transparent; background-color: 
       transparent; border-color: transparent;
       transparent; cursor: default;
    }

    button:focus {outline:0;}

    button:active i{
      color: #fdb5ce;
    }
  `]
})
export class SwitcherComponent {

  constructor(){

  }

  ngOnInit() {
   
  }

}
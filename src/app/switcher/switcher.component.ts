import { Component } from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styles: [`
    :host {
        text-align:center;
        display:block;
        margin-left:40px;
        margin-right:40px;
    }
    img {
      width: 100%;
      height: auto;
    }
  `]
})
export class SwitcherComponent {

  constructor(){

  }

  ngOnInit() {
   
  }

}
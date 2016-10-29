import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  currentRoute: string;

  constructor(){
  }

  ngOnInit() {
    this.currentRoute = window.location.pathname;
  }

  getRoute() {
    this.currentRoute = window.location.pathname;
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  currentRoute: string;

  constructor() { }

  ngOnInit() {
    this.currentRoute = window.location.pathname;
  }

  getRoute() {
    this.currentRoute = window.location.pathname;
  } 
}
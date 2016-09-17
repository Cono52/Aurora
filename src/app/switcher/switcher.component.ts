import { Component } from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent {

  constructor(){

  }

  ngOnInit() {
   
  }

  switch() {
    console.log("demo switch m8");
  }

}
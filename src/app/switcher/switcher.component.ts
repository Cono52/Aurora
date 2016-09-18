import { Component, OnInit } from '@angular/core';

import { Cake } from '../cake';
import { CakesService } from '../cakes.service';


@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  cakes: Cake[];
  currentCake: Cake;

  constructor( private cakesService: CakesService ) { }

  ngOnInit(): void {
    this.getCakes();
  }

  getCakes(): void {
    this.cakesService
        .getCakes()
        .then(cakes => {
          this.cakes = cakes; 
          this.currentCake = this.cakes.shift();
        });
  }

  switch() {
    this.currentCake = this.cakes.shift();
    if(this.cakes.length < 5){
      console.log("load more");
    }
  }

}
import { Component } from '@angular/core';

import { Cake } from '../cake';
import { CakesService } from '../cakes.service';


@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent {

  cakes: Cake[];
  currentCake: Cake;

  constructor( private cakesService: CakesService ) { }

  ngOnInit(): void {
    this.getCakes();
  }

  getCakes(): void {
    this.cakesService
        .getCakes()
        .then(cakes => this.cakes = cakes);
  }

  switch() {
    console.log(this.cakes);
  }

}
import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('App', () => {
   let app:AppComponent; 


   it('tester', () => {
     expect(2+2==4);
   })
});

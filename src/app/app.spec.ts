import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';

describe('App', () => {
   let app:App; 

   it('tester', () => {
     expect(2+2==4);
   })
});

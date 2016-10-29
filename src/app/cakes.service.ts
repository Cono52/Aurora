import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cake } from './cake';

@Injectable()
export class CakesService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private cakesUrl = 'app/cakes';  // URL to web api

  constructor(private http: Http) { }
  
  getCakes(): Promise<Cake[]> {
    return this.http.get(this.cakesUrl)
               .toPromise()
               .then(response => response.json().data as Cake[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
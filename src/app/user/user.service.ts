import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'app/users';  // URL to web api

  constructor(private http: Http) { }
  
  getUser(username: string, password: string): Promise<User> {
    return;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
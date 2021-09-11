import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errMsg: string;
  errMsgListener = new Subject<string>();
  user;
  loggedIn: boolean;
  loggedInListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn() {
    if (localStorage.getItem('user'))
      return true;
    return false;
  }

  login(email, password) {
    const user = { email: email, password: password };
    if (email && password) {
      localStorage.setItem('user', 'Login Success')
      this.router.navigate(['/orders']);
      this.loggedIn = true;
      this.loggedInListener.next(this.loggedIn);
    }
  }

  logout() {
      this.loggedIn = false;
      this.loggedInListener.next(this.loggedIn);
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
  }

}

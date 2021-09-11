import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  err;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    this.err = '';
    if (form.invalid) {
      this.err = 'Please provide a valid email and a password.';
      return;
    }
    this.authService.login(form.value.email, form.value.password);
    this.router.navigate(['/orders']);
  }

}

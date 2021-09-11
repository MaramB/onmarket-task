import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: AllOrdersComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/orders', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

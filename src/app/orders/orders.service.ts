import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: [];
  apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { } 

  getOrders() {
    return this.http.get<{ orders: [] }>(this.apiUrl + '/orders');
  }
}

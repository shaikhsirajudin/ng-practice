import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'api/BankLoan'; // Example API URL
  constructor(private http: HttpClient) {
    this.http = http;
  }
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetAllUsers`);
  }
  // Example: POST request
  createPost(post: Customer): Observable<any> {
    return this.http.post(`${this.apiUrl}/RegisterAsBankUser`, post);
  }

  createUpdate(post: Customer): Observable<any> {
    return this.http.post(`${this.apiUrl}/RegisterAsBankUser`, post);
  }

  deletePost(userId?: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/RegisterAsBankUser`, userId);
  }
}

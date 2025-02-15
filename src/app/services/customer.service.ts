import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'api/BankLoan'; // Example API URL
  constructor(private http: HttpClient) {
    this.http = http;
  }
  // Example: POST request
  createPost(post: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/RegisterAsBankUser`, post);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private apiUrl = 'api/BankLoan'; // Example API URL

  constructor(private http: HttpClient) {
    this.http = http;
  }

  // Example: GET request
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetAllUsers`);
  }

  // Example: POST request
  createPost(post: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, post);
  }

 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {


  constructor(private http: HttpClient) {
    this.http = http;
  }

  // Example: GET request
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetAllUsers`);
  }

  

 
}

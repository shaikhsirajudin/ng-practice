import { HttpClient } from '@angular/common/http';
import { Component, inject,  OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  /*
  New way of dependency injection */
  http = inject(HttpClient);
  users: IUser[] = [];

  /* Old way of dependency injection
  constructor(private http: HttpClient) { 
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      console.log(data);
    });
  }*/

  ngOnInit(): void {
   this.getAllRoles();
  }
  firstName: string = 'John';
  angularVersion: number = 12;
  isActive: boolean = true;
  currentDate: Date = new Date();
  inputType: string = 'radio';
  selectedRole: string = 'admin';

  showAlert() {
    alert('Hello, Angular!');
  }

  showAlertMessage(message: string) {
    alert(message);
  }
  getAllRoles() {
    
    this.http.get('/api/BankLoan/GetAllUsers').subscribe((res: any) => {
      this.users=res.data;     
    });
 
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent {
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
}

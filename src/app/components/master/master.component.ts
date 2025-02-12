import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { DesignationComponent } from "../designation/designation.component";

@Component({
  selector: 'app-master',
  imports: [RolesComponent, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
currentComponent:string = 'RolesComponent';
}

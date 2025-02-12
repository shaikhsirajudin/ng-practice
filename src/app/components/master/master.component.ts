import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { DesignationComponent } from "../designation/designation.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [CommonModule, RolesComponent, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
})
export class MasterComponent {
  selectedTab: string = 'Roles';
  
  changeTab(tabName: string) {
    this.selectedTab = tabName;
  }
}

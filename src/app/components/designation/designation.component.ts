import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IUser } from '../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  users: IUser[] = [];
  ngOnInit(): void {
    this.getAllDesignations().subscribe((res: any) => { 
      this.users = res.data;
    });
  }
  getAllDesignations() {
    return this.masterService.getPosts();
  }

}

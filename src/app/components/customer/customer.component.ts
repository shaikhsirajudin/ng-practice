import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnInit {
  customer: Customer = {};
  customers: Customer[] = [];
  custSvc = inject(CustomerService);
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.custSvc.getPosts().subscribe((res: any) => {
      this.customers = res.data;
    });
  }
  onReset() {
    this.customer = {};
  }
  onSaveClick() {
    this.custSvc.createPost(this.customer).subscribe((res: any) => {
      console.log(res);
      if (res.status === 200 && res.request) {
        this.loadCustomers();
      } else {
        console.log('Error occurred: ' + res);
        alert(res.message);
      }
    });
  }
  onEdit(cust: Customer) {
    this.customer = cust;
  }

  onUpdate() {
    this.custSvc.createUpdate(this.customer).subscribe((res: any) => {
      console.log(res);
      if (res.status === 200 && res.request) {
        this.loadCustomers();
      } else {
        console.log('Error occurred: ' + res);
        alert(res.message);
      }
    });
  }
  onDelete(userId?: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.custSvc.deletePost(userId).subscribe((res: any) => {
        console.log(res);
        if (res.status === 200 && res.request) {
          this.loadCustomers();
        } else {
          console.log('Error occurred: ' + res);
          alert(res.message);
        }
      });
    }
  }
}

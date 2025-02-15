import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {  FormsModule } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.getCustomers();
  }
  customer: Customer = {};
  customers: Customer[] = [];
}

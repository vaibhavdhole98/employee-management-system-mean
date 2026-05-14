import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../../core/services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  analytics: any[] = [];

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getAnalytics();
  }

  getAnalytics(): void {

    this.employeeService
      .getDepartmentAnalytics()
      .subscribe({
        next: (response: any) => {
          this.analytics = response.data;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Router} from '@angular/router';
import { EmployeeService } from '../../../../core/services/employee.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  searchText: string = '';
  employees: any[] = [];
  selectedSort: string = '';
  currentPage: number = 1;
  limit: number = 5;
  selectedDepartment: string = '';
  selectedCity: string = '';
  departments: any[] = [];
  cities: any[] = [];
  constructor(
  private employeeService: EmployeeService,
  private authService: AuthService,
  private router: Router
) {}

  ngOnInit(): void {
    this.getEmployees();

  }

  getEmployees(): void {

    this.employeeService
      .getEmployeesWithFilters(
        this.searchText,
        this.selectedSort,
        this.currentPage,
        this.limit,
        this.selectedDepartment,
        this.selectedCity
      )
      .subscribe({
        next: (response: any) => {

          this.employees = response.data;

          this.departments = [
            ...new Set(
              response.data.map(
                (employee: any) => employee.department
              )
            )
          ];

          this.cities = [
            ...new Set(
              response.data.map(
                (employee: any) => employee.city
              )
            )
          ];
        },
        error: (error) => {
          console.log(error);
        }
      });
  }






  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.getEmployees();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



  nextPage(): void {
    this.currentPage++;
    this.getEmployees();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getEmployees();
    }
  }
logout(): void {

  this.authService.logout();

  this.router.navigate(
    ['/login']
  );
}
}
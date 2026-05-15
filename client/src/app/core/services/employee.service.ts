import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  environment
} from '../../../environments/environment';
import { Employee } from '../../shared/interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private apiUrl = 'http://localhost:5000/api/v1/employees';
  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }

  updateEmployee(id: string, employee: Employee): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  searchEmployees(search: string) {
    return this.http.get(
      `${this.apiUrl}?search=${search}`
    );
  }
  sortEmployees(sort: string) {
    return this.http.get(
      `${this.apiUrl}?sort=${sort}`
    );
  }

  getPaginatedEmployees(
    page: number,
    limit: number
  ) {
    return this.http.get(
      `${this.apiUrl}?page=${page}&limit=${limit}`
    );
  }

  filterEmployees(
    department: string,
    city: string
  ) {

    return this.http.get(
      `${this.apiUrl}?department=${department}&city=${city}`
    );
  }
  getDepartmentAnalytics() {

    return this.http.get(
      `${this.apiUrl}/analytics/department-dashboard`
    );
  }
  getEmployeesWithFilters(
    search: string,
    sort: string,
    page: number,
    limit: number,
    department: string,
    city: string
  ) {

    return this.http.get(
      `${this.apiUrl}?search=${search}&sort=${sort}&page=${page}&limit=${limit}&department=${department}&city=${city}`
    );
  }

}
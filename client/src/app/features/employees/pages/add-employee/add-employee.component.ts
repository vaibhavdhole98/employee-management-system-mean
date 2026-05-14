import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { EmployeeService } from '../../../../core/services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
imports: [
  CommonModule,
  ReactiveFormsModule,
  RouterModule
],
  
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeForm: FormGroup;

constructor(
  private fb: FormBuilder,
  private employeeService: EmployeeService,
  private route: ActivatedRoute,
  private router: Router
) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      salary: ['', Validators.required],
      experience: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

employeeId: string = '';
  ngOnInit(): void {

  this.employeeId = this.route.snapshot.params['id'];

  if (this.employeeId) {

    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe({
        next: (response) => {
          this.employeeForm.patchValue(response.data);
        }
      });
  }
}

onSubmit(): void {

  if (this.employeeForm.invalid) return;

  if (this.employeeId) {

    this.employeeService
      .updateEmployee(this.employeeId, this.employeeForm.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        }
      });

  } else {

    this.employeeService
      .createEmployee(this.employeeForm.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        }
      });
  }
}
}
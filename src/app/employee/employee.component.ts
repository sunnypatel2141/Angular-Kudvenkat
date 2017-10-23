import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  firstName: String = 'Sunny';
  lastName: String = 'Patel';
  gender: String = 'Male';
  age: Number = 24;
}

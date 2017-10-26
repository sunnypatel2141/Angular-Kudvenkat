import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  colSpan: Number = 2;
  firstName: String = 'Sunny';
  lastName: String = 'Patel';
  gender: String = 'Male';
  age: Number = 24;
}

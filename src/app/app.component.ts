import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
                <h1>{{getFullName()}}</h1>
                <img src='{{imagePath}}'/>
                <app-employee></app-employee>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  imagePath: string = 'https://i0.wp.com/tentulogo.com/wp-content/uploads/ibm.png';

  firstName: string = 'Sunny';
  lastName: string = 'Patel';

  getFullName(): string
  {
    return this.firstName + ' ' + this.lastName;
  }
}

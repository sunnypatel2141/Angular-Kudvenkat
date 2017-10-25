import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
                <h1>{{getFullName()}}</h1>
                <img src='{{imagePath}}'/>
                <app-employee></app-employee>
                <button [disabled]='isDisabledTrue'>Click Me</button>
                <button [disabled]='isDisabledFalse'>Can't Click Me</button>
                <span bind-innerHtml='pageHeader'></span>
                <div>{{badHtml}}</div>
                <div [innerHtml]='badHtml'></div>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  imagePath: string = 'https://i0.wp.com/tentulogo.com/wp-content/uploads/ibm.png';

  firstName: string = 'Sunny';
  lastName: string = 'Patel';

  isDisabledFalse: boolean = true;
  isDisabledTrue: boolean = false;

  badHtml: string = "string is bad <script> is not allowed but what about {{;";

  getFullName(): string
  {
    return this.firstName + ' ' + this.lastName;
  }
}

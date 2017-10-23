import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
                <h1>{{pageHeader}}</h1>
                <app-employee></app-employee>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: String = 'Employee Details'
}

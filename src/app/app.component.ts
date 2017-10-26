import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
                <app-employee></app-employee>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isDisabledFalse: boolean = true;
  
}

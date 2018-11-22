import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template:
  `
  <h1> employee list </h1>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
 `,
 styles: []
})
export class EmployeelistComponent implements OnInit {
    public employees =[
        
            {"id": 1,"name": "hemadri","age":78},
            {"id":2,"name":"naresh","age":43 }
    ];
    constructor(){}
    ngOnInit(){

    }
}

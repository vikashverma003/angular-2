import { Component, Input, Output } from '@angular/core';

@Component({

selector: `employee-count`,

templateUrl: `app/employee/employeeCount.component.html`,

styleUrls: ['app/employee/employeeCount.component.css']

})

export class EmployeeCountComponent{

    @Input()
    all:number;

    @Input()
    male:number;

    @Input()
    female:number;


}
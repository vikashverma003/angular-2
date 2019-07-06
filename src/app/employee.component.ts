import { Component } from '@angular/core';

@Component({

    selector: 'my-employee',
    //template: 'Here is employee Data',

    templateUrl: 'app/employee.component.html'

})

export class EmployeeComponent{

    fistName = "sam";
    lastName = "wam";
    email = "wam@gmail.com";
    age = 34;

}
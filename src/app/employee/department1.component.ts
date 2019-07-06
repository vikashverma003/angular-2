import { Component} from '@angular/core';

@Component({

selector: 'my-dept1',

templateUrl:'app/employee/department1.component.html',

})

export class Department1Component{

    employees:any[];

    constructor(){
        this.employees= [

            {code: 'emp101', name:"sam", age:23, gender: 'male', annualSalary: 50000, dateOfBirth: '01/09/1999'},
            
            {code: 'emp102', name:"sawamm", age:223, gender: 'male', annualSalary: 150000, dateOfBirth: '02/09/1994'},
            {code: 'emp103',name:"tony", age:223, gender: 'male', annualSalary: 150000, dateOfBirth: '06/09/1998'},

            {code: 'emp104', name:"loki", age:231, gender: 'male', annualSalary: 50000, dateOfBirth: '07/09/1993'}, 
        ];
    }

// for pipes we are using the mm/dd/yy format -- uppercase .lowercase, dateformat 
// we can also chain pipes together 

    getEmployees():void{

        this.employees= [

            {code: 'emp101', name:"sam", age:23, gender: 'male', annualSalary: 50000, dateOfBirth: '01/09/1999'},
            
            {code: 'emp102', name:"sawamm", age:223, gender: 'male', annualSalary: 150000, dateOfBirth: '02/09/1994'},
            {code: 'emp103', name:"tony", age:223, gender: 'male', annualSalary: 150000, dateOfBirth: '06/09/1998'},

            {code: 'emp104', name:"loki", age:231, gender: 'male', annualSalary: 50000, dateOfBirth: '07/09/1993'}, 

            {code: 'emp105', name:"brandon", age:1231, gender: 'female', annualSalary: 150000, dateOfBirth: '09/09/1993'},
        ];

    }

    trackByEmpCode(index: number, employee: any): string{

        return employee.code;
    }
}
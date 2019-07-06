import { Component} from '@angular/core';

@Component({

selector: 'my-dept',

templateUrl:'app/employee/department.component.html',

})

export class DepartmentComponent{

    employees:any[];

    constructor(){
        this.employees= [

            {code: 'emp101', name:"sam", age:23, gender: 'male', annualSalary: 50000, dateOfBirth: '01/09/1999'},
            
            {code: 'emp102', name:"sawamm", age:223, gender: 'female', annualSalary: 150000, dateOfBirth: '02/09/1994'},
            {code: 'emp103',name:"tony", age:223, gender: 'female', annualSalary: 150000, dateOfBirth: '06/09/1998'},

            {code: 'emp104', name:"loki", age:231, gender: 'male', annualSalary: 50000, dateOfBirth: '07/09/1993'}, 
        ];
    }

// for pipes we are using the mm/dd/yy format -- uppercase .lowercase, dateformat 
// we can also chain pipes together 


    getTotalEmployeesCount():number{

        return this.employees.length;
    }

    getTotalMaleEmployeesCount():number{

        return this.employees.filter(e=>e.gender === 'male').length;
    }


    getTotalFemaleEmployeesCount():number{

        return this.employees.filter(e=>e.gender === 'female').length;
    }
      
}
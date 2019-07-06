import { Component } from '@angular/core';

import { TutorialsComponent } from './tutorials.component'

@Component({
  selector: 'my-app',


  // template: `
  //  <my-dept></my-dept>`,

  // template: `<my-dept1></my-dept1>`,

  //template : `<my-employee></my-employee>`,

  // templateUrl: `app/app.component.html`,
  
  // styleUrls: ['app/app.component.css']

  //templateUrl: 'form.component.html',


//  template: `<h1>{{firstName}} and {{lastName}} 's </h1>   
//             <my-tutorials></my-tutorials>
//             `,

// two way data binding 

// template: `<input type="text" [value]= 'firstName' (input)="firstName=$event.target.value">
//             <br />
//             your name is: {{firstName}}
// `

// template: `<input type="text" [(ngModel)] ='firstName' >
//             <br />
//             your name is: {{firstName}}
// `





 // template: '<button style="color:red"  [style.font-size.px]= "isSize">click me </button>'

 //template: '<button style="color:red"  [style.font-weight]= "isBold ? 'bold': 'normal' ">click me </button>'

  //directives: [TutorialsComponent],

  //<img [src] ="imgLink"><br> property binding
// {{}} interpolation 
//
//  <button disabled="{{isDisabled}}">Click me</button>
  
 /* template: `<h2>{{name}}</h2>
            <p>{{getFullName()}}</p>
            <button [disabled]="isDisabled">Click me</button>
            <span [innerHTML] = 'pageHeader'></span>
          <img src="{{imgLink}}">
           <input type="text" value="sam">` */

    // template: `<input type="text" [(ngModel)] = 'pragim'>
    //             <simple-component [simpleInput] = 'pragim'></simple-component>`,
          
})
export class AppComponent  {


  pragim:string = "Pragim";
  
  name = 'lets get started with employee data';
  pageHeader = "Employee details";

  number = 2322;
  imgLink= "119140-trigger-carryminati-mp3-song-300.jpg";

  isDisabled = false;

  firstName = 'samy';

  lastName = "wamy";

  //isSize= 23;

  fontSize=34;
  isItalic = true
  isBold= true;


  showDetails = true;

  toggleDetails(){

    this.showDetails = !this.showDetails;

  }

  getFullName(){

    return this.firstName + ' ' + this.lastName;

  }

}

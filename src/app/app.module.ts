import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { FormsModule }      from '@angular/forms';

import { TutorialsComponent } from './tutorials.component';

import {EmployeeComponent} from './employee.component';

import { DepartmentComponent } from './employee/department.component';
import { Department1Component } from './employee/department1.component';

import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './simpleComponent/simple.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent,EmployeeComponent, TutorialsComponent, DepartmentComponent, EmployeeCountComponent, Department1Component, SimpleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

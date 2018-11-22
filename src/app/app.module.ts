import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import {EmployeelistComponent} from './app1/employee-list.component';
//import {EmployeelistdetailsComponent } from './app1/employee-list-details'



@NgModule({
  declarations: [
    AppComponent,App1Component,EmployeelistComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

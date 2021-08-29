import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthentificationComponent } from './/authentification.component';



@NgModule({
  declarations: [
    SigninComponent,
    AuthentificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthentificationModule { }

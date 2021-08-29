import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { FrontofficeComponent } from './frontoffice.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    DossiermedicalComponent,
    FrontofficeComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule { }

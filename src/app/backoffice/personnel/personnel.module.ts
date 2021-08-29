import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeComponent } from './demande/demande.component';
import { FichederenseignementComponent } from './fichederenseignement/fichederenseignement.component';
import { PersonnelComponent } from './personnel.component';
import { PersonnelRoutingModule } from './personnel-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemandeComponent,
    FichederenseignementComponent,
    PersonnelComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PersonnelRoutingModule,
  ],
})
export class PersonnelModule {}

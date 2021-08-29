import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FichederenseignementComponent } from './fichederenseignement/fichederenseignement.component';
import { DemandeComponent } from './demande/demande.component';
import { PersonnelComponent } from './personnel.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: PersonnelComponent,
    children: [
      { path: '', redirectTo: 'demande', pathMatch: 'full' },
      { path: 'demande', component: DemandeComponent },

      { path: 'fiche', component: FichederenseignementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelRoutingModule {}

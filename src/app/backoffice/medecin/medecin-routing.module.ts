import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { MedecinComponent } from './medecin.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { GardeComponent } from './garde/garde.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: MedecinComponent,
    children: [
      { path: '', redirectTo: 'agenda', pathMatch: 'full' },
      { path: 'agenda', component: AgendaComponent },
      { path: 'dm', component: DossiermedicalComponent },
      { path: 'autorisation', component: AutorisationComponent },
      { path: 'garde', component: GardeComponent },
      { path: 'prescription', component: PrescriptionComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedecinRoutingModule {}

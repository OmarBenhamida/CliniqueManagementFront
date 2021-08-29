import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { ComptabiliteComponent } from './comptabilite.component';
import { PaiementComponent } from './paiement/paiement.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: ComptabiliteComponent,
    children: [
      { path: '', redirectTo: 'paiement', pathMatch: 'full' },
      { path: 'paiement', component: PaiementComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptabiliteRoutingModule {}

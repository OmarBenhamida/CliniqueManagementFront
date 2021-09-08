import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { LoginComponent } from './login/login.component';
import { FrontofficeComponent } from './frontoffice.component';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: FrontofficeComponent,
    children: [
      { path: 'dm', component: DossiermedicalComponent },

      { path: 'login', component: LoginComponent },
      { path: 'home', component: FrontofficeComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontofficeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
 // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), },
 

  {
    path: '', component: BackofficeComponent,
    children: [
      { path: '', redirectTo: 'personnel', pathMatch: 'full'},
      { path: 'personnel', loadChildren: () => import('./personnel/personnel.module').then(m => m.PersonnelModule), },
      { path: 'comptabilite', loadChildren: () => import('./comptabilite/comptabilite.module').then(m => m.ComptabiliteModule), },
      { path: 'laboratoire', loadChildren: () => import('./laboratoire/laboratoire.module').then(m => m.LaboratoireModule), },
      { path: 'medecin', loadChildren: () => import('./medecin/medecin.module').then(m => m.MedecinModule), },
      { path: 'rh', loadChildren: () => import('./rh/rh.module').then(m => m.RhModule), },
      { path: 'secretaire', loadChildren: () => import('./secretaire/secretaire.module').then(m => m.SecretaireModule), },
      { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule), },



    ]
}



 // tslint:disable-next-line:max-line-length
 //{ path: 'administrateur', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule), canActivate: [MyGuard]},
 // tslint:disable-next-line:max-line-length
 //{ path: 'utilisateur', loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule), canActivate: [MyGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministradorComponent } from './administrador/administrador.component';
import { AuthGuard } from '../auth/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard]
      }
    ]
  }
 ];
 

@NgModule({
 imports: [
   RouterModule.forChild(adminRoutes)
 ],
 exports: [
   RouterModule
 ]
})
export class AdministradorRoutingModule { }

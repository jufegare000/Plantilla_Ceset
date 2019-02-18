import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../../auth/auth-guard.service';
import { LoginService }          from '../../auth/login.service';
import { InicioComponent }       from './inicio.component';

const loginRoutes: Routes = [
  { path: 'inicio', component: InicioComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    LoginService
  ]
})
export class InicioRoutingModule { }

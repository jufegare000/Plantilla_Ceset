import { Routes } from '@angular/router';
import { InicioComponent } from '../componentes/inicio/inicio.component';
import { LoginComponent } from '../componentes/login/login.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RegisterComponent } from '../componentes/register/register.component';
import { NotificationCardComponent } from '../componentes/notification-card/notification-card.component';

export const routes: Routes = [
 { path: 'inicio',  component: InicioComponent, canActivate: [AuthGuard] },
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 {
    path: 'administrador',
    loadChildren: 'app/administrador/administrador.module#AdministradorModule',
    canLoad: [AuthGuard],
    data: { preload: true }
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dev',
    component: NotificationCardComponent
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
 
];

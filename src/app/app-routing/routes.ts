import { Routes } from '@angular/router';
import { InicioComponent } from '../componentes/inicio/inicio.component';
import { LoginComponent } from '../componentes/login/login.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RegisterComponent } from '../componentes/register/register.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { NotificationCardComponent } from '../componentes/notification-card/notification-card.component';
import { ActivityListComponent } from '../componentes/activity-list/activity-list.component';

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
    component: ActivityListComponent
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
 
];

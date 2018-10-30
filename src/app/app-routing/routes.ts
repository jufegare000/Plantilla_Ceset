import { Routes } from '@angular/router';
import { InicioComponent } from '../componentes/inicio/inicio.component';
import { LoginComponent } from '../componentes/login/login.component';
import { AuthGuard } from '../auth/auth-guard.service';

export const routes: Routes = [
 { path: 'inicio',  component: InicioComponent, canActivate: [AuthGuard] },
 { path: '', redirectTo: '/inicio', pathMatch: 'full' },
 {
    path: 'administrador',
    loadChildren: 'app/administrador/administrador.module#AdministradorModule',
    canLoad: [AuthGuard],
    data: { preload: true }
  },
  {
    path: 'holi',
    component: LoginComponent
  }
 
];

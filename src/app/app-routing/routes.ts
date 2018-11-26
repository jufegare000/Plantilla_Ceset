import { Routes } from '@angular/router';
import { InicioComponent } from '../componentes/inicio/inicio.component';
import { LoginComponent } from '../componentes/login/login.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RegisterComponent } from '../componentes/register/register.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { NotificationCardComponent } from '../componentes/notification-card/notification-card.component';
import { ActivityListComponent } from '../componentes/activity-list/activity-list.component';
import { ActivityDetailComponent } from '../componentes/activity-detail/activity-detail.component';
import { BudgetComponent } from '../componentes/budget/budget.component';
import { BudgetItemComponent } from '../componentes/budget-item/budget-item.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
   path: 'inicio',
   component: InicioComponent,
   children: [
     {
       path: 'actividades',
       component: ActivityListComponent
     },
     {
      path: 'actividades/crear',
      component: ActivityDetailComponent
    },
    {
      path: 'actividades/editar/:code',
      component: ActivityDetailComponent
    },
    {
      path: 'actividades/editar/:code/presupuesto',
      component: BudgetComponent
    },
    {
      path: 'actividades/editar/:code/presupuesto/:budgetItem',
      component: BudgetItemComponent
    }
   ]
  },
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
    component: BudgetComponent
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
 
];

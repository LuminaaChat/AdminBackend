import { Routes } from '@angular/router';
import {DASHBOARD_ROUTES} from "./dashboard/dashboard.routes";
import {authGuard} from "./shared/guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  },
];

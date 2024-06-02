import { Routes } from '@angular/router';
import {authGuard} from "../shared/guards/auth.guard";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'divisions',
        loadComponent: () => import('./pages/tenants/tenants.component').then(m => m.TenantsComponent),
        canActivate: [authGuard],
      },
      {
        path: 'groups',
        loadComponent: () => import('./pages/groups/groups.component').then(m => m.GroupsComponent),
        canActivate: [authGuard],
      },
      {
        path: 'channels',
        loadComponent: () => import('./pages/channels/channels.component').then(m => m.ChannelsComponent),
        canActivate: [authGuard],
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent),
        canActivate: [authGuard],
      },
      {
        path: 'tree',
        loadComponent: () => import('./pages/tree/tree.component').then(m => m.TreeComponent),
        canActivate: [authGuard],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'divisions'
      },
    ]
  },
];

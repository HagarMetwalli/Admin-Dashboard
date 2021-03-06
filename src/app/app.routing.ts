import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
// import { MapsComponent } from './pages/maps/maps.component';
// import { NotificationsComponent } from './pages/notifications/notifications.component';
// import { StoresComponent } from './pages/stores/stores.component';
// import { TableComponent } from './pages/table/table.component';
// import { TypographyComponent } from './pages/typography/typography.component';
export const AppRoutes: Routes = [
  {
    path: '' ,
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },  
]},
{
  path: 'reset-password',
  component: ResetPasswordComponent   
},
{
  path: '**',
  redirectTo: 'home'
},

]

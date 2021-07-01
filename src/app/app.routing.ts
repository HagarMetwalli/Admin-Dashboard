import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';

export const AppRoutes: Routes = [
  {
    path: '',
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
  path: 'tempPartners',
  component: TypographyComponent
},
{
  path: 'partners',
  component: TableComponent
},
{
  path: 'clients',
  component: NotificationsComponent
},
{
  path: 'stores',
  component: MapsComponent
},
  {
    path: '**',
    redirectTo: 'home'
  }
]

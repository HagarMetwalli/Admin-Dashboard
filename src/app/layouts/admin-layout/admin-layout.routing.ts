import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'partners',          component: TableComponent },
    { path: 'tempPartners',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'stores',           component: MapsComponent },
    { path: 'clients',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];

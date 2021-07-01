import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { StoresComponent } from 'app/pages/stores/stores.component';
import { TempPartnersComponent } from 'app/pages/temp-partners/temp-partners.component';
import { CustomersComponent } from 'app/pages/customers/customers.component';
import { PartnersComponent } from 'app/pages/partners/partners.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'partners',          component: PartnersComponent },
    { path: 'tempPartners',     component: TempPartnersComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'stores',           component: StoresComponent },
    { path: 'clients',  component:  CustomersComponent},
    { path: 'upgrade',        component: UpgradeComponent }
];

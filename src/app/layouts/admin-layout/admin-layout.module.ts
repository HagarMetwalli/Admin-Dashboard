import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { StoresComponent }            from '../../pages/stores/stores.component';
import { PartnersComponent } from 'app/pages/partners/partners.component';
import { TempPartnersComponent } from 'app/pages/temp-partners/temp-partners.component';
import { CustomersComponent } from 'app/pages/customers/customers.component';
// Directive  
import { ComparePasswordDirective } from '../../directives/compare-password.directive';  



@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    PartnersComponent,
    TempPartnersComponent,
    CustomersComponent,
    IconsComponent,
    StoresComponent,
   ComparePasswordDirective
  ],
  exports: [  
    ComparePasswordDirective  
  ]  
})

export class AdminLayoutModule {}

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SearchFilterPipe } from './search-filter.pipe';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SearchFilterPipe,
    ResetPasswordComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    
  ],
    providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

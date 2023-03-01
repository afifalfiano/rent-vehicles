import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonUiModule } from '@rent-vehicles/common-ui';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { TenantComponent } from './views/admin/tenant/tenant.component';
import { ItemsComponent } from './views/admin/items/items.component';
import { CategoryComponent } from './views/admin/category/category.component';
import { TransactionsComponent } from './views/admin/transactions/transactions.component';
import { ReportsComponent } from './views/admin/reports/reports.component';
import { NotfoundComponent } from './views/notfound/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    DashboardComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    TenantComponent,
    ItemsComponent,
    CategoryComponent,
    TransactionsComponent,
    ReportsComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

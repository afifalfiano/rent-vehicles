import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { CategoryComponent } from "./views/admin/category/category.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { ItemsComponent } from "./views/admin/items/items.component";
import { ReportsComponent } from "./views/admin/reports/reports.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TenantComponent } from "./views/admin/tenant/tenant.component";
import { TransactionsComponent } from "./views/admin/transactions/transactions.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";
import { NotfoundComponent } from "./views/notfound/notfound/notfound.component";


const routes: Routes = [
  { path: "", redirectTo: 'auth/login', pathMatch: 'full' },
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", title: 'Dashboard', component: DashboardComponent },
      { path: "tenant", title: 'Tenant', component: TenantComponent },
      { path: "items", title: 'Items', component: ItemsComponent },
      { path: "category", title: 'Category', component: CategoryComponent },
      { path: "transactions", title: 'Transactions', component: TransactionsComponent },
      { path: "reports", title: 'Reports', component: ReportsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  {path: 'notfound', component: NotfoundComponent},
  { path: "**", redirectTo: "notfound", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

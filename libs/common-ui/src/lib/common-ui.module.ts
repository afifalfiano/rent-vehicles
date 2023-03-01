import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { MapExampleComponent } from './components/maps/map-example/map-example.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    SidebarComponent,
    AdminNavbarComponent,
    AuthNavbarComponent,
    IndexNavbarComponent,
    MapExampleComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
    FooterSmallComponent,
    IndexDropdownComponent,
    NotificationDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    UserDropdownComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent
  ],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [
    SidebarComponent,
    AdminNavbarComponent,
    AuthNavbarComponent,
    IndexNavbarComponent,
    MapExampleComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
    FooterSmallComponent,
    IndexDropdownComponent,
    NotificationDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    UserDropdownComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent
  ]
})
export class CommonUiModule {}

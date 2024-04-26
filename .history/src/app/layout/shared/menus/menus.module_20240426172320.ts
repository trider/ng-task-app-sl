import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FormsModule } from '@angular/forms';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
// import { NavMenuAppsComponent } from './nav-menu-apps/nav-menu-apps.component';
// import { NavMenuVaultComponent } from './nav-menu-vault/nav-menu-vault.component';
// import { NavMenuNotificationsComponent } from './nav-menu-notifications/nav-menu-notifications.component';
// import { NavMenuTasksComponent } from './nav-menu-tasks/nav-menu-tasks.component';
// import { NavMemberSearchComponent } from './nav-member-search/nav-member-search.component';





@NgModule({
  declarations: [
    MegaMenuComponent,
    // NavMenuAppsComponent,
    // NavMenuNotificationsComponent,
    // NavMenuTasksComponent,
    // NavMenuVaultComponent,
    // NavMemberSearchComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule,
    ClickOutsideModule,
    // NgSelectModule,
    SimplebarAngularModule,

  ],
  exports:[
    MegaMenuComponent,
    // NavMenuAppsComponent,
    // NavMenuVaultComponent,
    // NavMenuTasksComponent,
    // NavMenuNotificationsComponent,
    // NavMemberSearchComponent
  ]
})
export class MenusModule { }

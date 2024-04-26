import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbAlertModule, NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './MaterialModule/material.module';
import { MenusModule } from './menus/menus.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { LayoutContainerComponent } from 'src/app/layout/layout-container.component';



@NgModule({
  declarations: [
    LeftSidebarComponent,
    RightSidebarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    NgbNavModule,
    SimplebarAngularModule,
    ClickOutsideModule,
    CommonModule,
    MaterialModule,
    MenusModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxDocViewerModule
  ],
  exports: [
    LeftSidebarComponent,
    RightSidebarComponent,
    TopbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

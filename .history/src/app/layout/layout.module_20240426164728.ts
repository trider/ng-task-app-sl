import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutContainerComponent } from './layout-container.component';
import { VerticalModule } from './vertical/vertical.module';
import { SharedModule } from './shared/shared.module';
import { HorizontalModule } from './horizontal/horizontal.module';
import { DetachedModule } from './detached/detached.module';
import { TwoColumnMenuModule } from './two-column-menu/two-column-menu.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MenusModule } from './shared/menus/menus.module';




@NgModule({
  declarations: [
    LayoutContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VerticalModule,
    HorizontalModule,
    DetachedModule,
    TwoColumnMenuModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MenusModule
  ],
  exports: [LayoutContainerComponent]
})
export class LayoutModule { }

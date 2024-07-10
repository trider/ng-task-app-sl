import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainRoutingModule } from './main-routing.module';
import { ServicesModule } from '@app/services/services.module';
import { ComponentsModule } from '@app/components/components.module';





@NgModule({
  
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    ServicesModule,
    ComponentsModule
  ],
  providers: [
    ServicesModule
    // { provide: HttpService, useClass: HttpService },
  ]

})
export class MainModule { }

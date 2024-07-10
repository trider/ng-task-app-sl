import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@app/services/services.module';




@NgModule({
  providers: [ServicesModule],
  imports: [
    CommonModule, 
    // NgbModule
    
  ],
  
})
export class ComponentsModule { }

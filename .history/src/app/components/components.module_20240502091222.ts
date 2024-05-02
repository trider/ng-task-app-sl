import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import  {NabvarComponent} from './nabvar/nabvar.component';



@NgModule({
  declarations: [
    NabvarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NabvarComponent
  ]
  
})
export class ComponentsModule { }

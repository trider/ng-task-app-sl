import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http-service/http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { 
 static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        { provide: HttpService, useClass: HttpService}
      ]
    }
  }

}

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http-service/http.service';
import Module from 'module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { 
 static forRoot(
  config: ServicesModule
 ):ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        { provide: HttpService, useClass: HttpService}
      ]
    }
  }

}

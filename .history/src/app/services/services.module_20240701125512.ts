import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http-service/http.service';
impp

export interface ServicesModuleConfig {
  // Define your configuration properties here
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { 
 static forRoot(
  config: ServicesModuleConfig
 ):ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        { provide: HttpService, useClass: HttpService}
      ]
    }
  }

}

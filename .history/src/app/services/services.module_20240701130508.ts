import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http-service/http.service';
import { TaskService } from './task-service/task.service';
import { DataService } from './data-service/data.service';

export interface ServicesModuleConfig {
  // Define your configuration properties here
}

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,


  ],
  providers: [ 
    // HttpService,
    // TaskService,
    // DataService
   ],
   exports: [
      // HttpService,
      // TaskService,
      // DataService
    
   ]


})
export class ServicesModule { 

  constructor(
    public httpService: HttpService,
    private taskService: TaskService,
    private dataService: DataService
  ) {

  }
//  static forRoot(
//   config: ServicesModuleConfig
//  ):ModuleWithProviders<ServicesModule> {
//     return {
//       ngModule: ServicesModule,
//       providers: [
//         { provide : ServicesModule, useValue: config},
//         { provide: HttpService, useClass: HttpService, useValue: config},
//         { provide: TaskService, useClass: TaskService},
//         { provide: DataService, useClass: DataService}
//       ]
//     }
  // }

}

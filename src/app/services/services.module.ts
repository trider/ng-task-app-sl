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

   ],
   exports: [

    
   ]


})
export class ServicesModule { 

  constructor(
    public httpService: HttpService,
    public taskService: TaskService,
    public dataService: DataService
  ) {

  }


}

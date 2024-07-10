import { ApplicationConfig } from "@angular/core";
import { HttpService } from "./services/http-service/http.service";
import { DataService } from "./services/data-service/data.service";
import { TaskService } from "./services/task-service/task.service";


export const appConfig: ApplicationConfig = {
 providers: [
   { provide: HttpService, useClass: HttpService },
   { provide: DataService, useClass: DataService },
   { provide: TaskService, useClass: TaskService } 
 ]
};
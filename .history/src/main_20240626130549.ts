/// <reference types="@angular/localize" />

import { enableProdMode, ApplicationConfig } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { app, bootstrap } from 'ngx-bootstrap-icons';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskServiceService } from './app/services/task-service/task--service.service';
import { DataServiceService } from './app/services/data-service/data-service.service';
import { HttpClientService } from './app/services/http-service/http-service.service';

export const appConfig: ApplicationConfig = {
    providers: [
      { provide: TaskServiceService, useClass: TaskServiceService},
      { provide: DataServiceService },
      { provide: HttpClientService },

    ]
};

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppModule, appConfig);

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { HttpService } from './services/http-service/http.service';
import { ServicesModule } from './services/services.module';

@NgModule({ declarations: [
        AppComponent,
    
    ],
    bootstrap: [
        AppComponent,
        

    
    ], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        NgbModule
        ],
        providers: [
            provideHttpClient(),
            ServicesModule
        
       
    ] })
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '@app/components/components.module';



@NgModule({
  
  imports: [
    LoginComponent,
    HomeComponent,
    CommonModule,
    MainRoutingModule,
    NgbModule,
    NgbNavModule,
    ComponentsModule
  ]
})
export class MainModule { }

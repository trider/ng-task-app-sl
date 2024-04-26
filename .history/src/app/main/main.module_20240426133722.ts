import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  
  imports: [
    LoginComponent,
    HomeComponent,
    CommonModule,
    MainRoutingModule,
    NgbModule
  ]
})
export class MainModule { }

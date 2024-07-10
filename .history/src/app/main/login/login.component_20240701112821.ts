import { Component, OnInit, ApplicationModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariables } from 'src/app/common/global-variables';
import { Users } from '@app/common/data/users';
import { HttpService } from '@app/services/http-service/http.service';
import { DataService } from '@app/services/data-service/data.service';
import { ServicesModule } from '@app/services/services.module';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ApplicationModule,
    ServicesModule
    // HttpService,
    // DataService

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  appVersion:string = GlobalVariables.appVersion;
  users:any = Users;
  user:any = null

  loginForm = new FormGroup({
    email: new FormControl('jonnygold@gmail.com'),
    password: new FormControl('1234'),
  });

  constructor(
    private router: Router,
    private httpService: HttpService,
    private dataService: DataService,
    // private servicesModule: ServicesModule
  ) { }

  ngOnInit(): void {
    
   
  }


onSubmit() {    

  this.servicesModule.services

  //  this.servicesModule.postServiceData('/login', this.loginForm.value).subscribe((response:any) => {

  //     if(response.isLoggedIn){
  //       this.dataService.changeMessage(response.status);
  //       sessionStorage.setItem('user', JSON.stringify(response));
  //       this.router.navigate(['/home']);
  //     }
  //   })

    this.httpService.postServiceData('/login', this.loginForm.value).subscribe((response:any) => { 
      if(response.isLoggedIn){
        this.dataService.changeMessage(response.status);
        sessionStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/home']);
      }
    })
    

  }




}

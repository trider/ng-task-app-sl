import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariables } from 'src/app/common/global-variables';
import { Users } from '@app/common/data/users';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  appVersion:string = GlobalVariables.appVersion;
  users:any = Users;
  user:any = null

  loginForm = new FormGroup({
    email: new FormControl('jonnygold@gmail.com'),
    password: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

  
  }


  onSubmit() {    

    this.user = this.users.filter((user:any) => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password)[0];
    if(this.user !== null ){
      alert(this.user.userName + ' logged in')
      console.log('User found\n\n', this.user);
      this.router.navigate(['/home']);

    }
  
  }
}

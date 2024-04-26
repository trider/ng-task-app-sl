import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, UntypedFormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl(),
    password: new UntypedFormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

  
  }


  onSubmit() {    
   this.router.navigate(['/home']);
  }
}

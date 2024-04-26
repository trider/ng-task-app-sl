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
  loginForm!: FormGroup;
  filterForm = new UntypedFormGroup({
    name: new UntypedFormControl(),
    loanBook: new UntypedFormControl(),
    loanBooks: new UntypedFormControl(),
    fields: new UntypedFormControl('grade'),
    field: new UntypedFormControl(),
    filterList: new UntypedFormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  
  }


  onSubmit() {    
   this.router.navigate(['/home']);
  }
}

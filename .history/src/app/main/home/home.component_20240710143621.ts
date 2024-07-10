import { Component, OnInit } from '@angular/core';

import { CommonModule, JsonPipe, KeyValuePipe } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { TableComponent } from '@app/components/table/table.component';
import { ModalComponent } from '@app/components/modal/modal.component';
import { ServicesModule } from '@app/services/services.module'; 

import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, Subscription  } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/** An actor's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    NavbarComponent,
    TableComponent,
    FooterComponent,
    JsonPipe,
    ReactiveFormsModule,
    ModalComponent,



  ],
  providers: [ServicesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  styles: `
		.close {
			font-size: 1.4rem;
			opacity: 0.1;
			transition: opacity 0.3s;
		}
		.nav-link:hover > .close {
			opacity: 0.8;
		}
	`,
})
export class HomeComponent implements OnInit{
  // tasks:any = Tasks;
  tasks$:Subscription = new Subscription();
  tasksDo$:Subscription = new Subscription();
  tasksDoing$:Subscription = new Subscription();
  tasksDone$:Subscription = new Subscription();
 
  showNav: boolean = false;
  tableCols: string[] = [
    'name',
    'description',
    'added',
    'updated',
    'status',
  ];
  currentYear!: number;
  user:any = null;
  message:any;
  userData:any = null
  navs = [1, 2, 3, 4, 5];
	counter = this.navs.length + 1;
	active: number = 1;

  profileForm = new FormGroup({
    id: new FormControl(''),
    created: new FormControl(''),
    isActive: new FormControl(''),
    isLoggedIn: new FormControl(''),
    name: new FormControl(
      '',
      [
        Validators.required, 
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i),
      
      ]
    ),
    email: new FormControl(''),
    password: new FormControl(''),
    status: new FormControl(''),
    updated: new FormControl(''),
    userId: new FormControl(''),
    userName: new FormControl(''),

  });

  formSubmitted:boolean = false;
  subscription: Subscription = new Subscription();
  



  constructor(
    private modalService: NgbModal,
    private servicesModule: ServicesModule,
  ) { 
   this.servicesModule.dataService.currentMessage.subscribe(message => this.message = message)
   this.servicesModule.dataService.currUser.subscribe(user => {
      this.userData = user
      this.populateProfile(user);
   })
   

  }
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.servicesModule.dataService.setUser(this.user);
    this.servicesModule.dataService.changeMessage(this.user.status);
    // if(this.message === 'Not Authenticated')this.router.navigate(['/login']);


    this.servicesModule.taskService.getTasks(this.user).subscribe(tasks => {
      this.tasks$= tasks
      this.servicesModule.taskService.updateTasks(tasks);
     });

    this.servicesModule.taskService.getTasks(this.user, true, 'do').subscribe(tasks => {
      this.tasksDo$ = tasks
    });

    this.servicesModule.taskService.getTasks(this.user, true, 'doing').subscribe(tasks => {
      this.tasksDoing$ = tasks
    });

    this.servicesModule.taskService.getTasks(this.user, true, 'done').subscribe(tasks => {
      this.tasksDone$ = tasks
    });

    

  }

  close(event: MouseEvent, toRemove: number) {
		this.navs = this.navs.filter((id) => id !== toRemove);
		event.preventDefault();
		event.stopImmediatePropagation();
	}

	add(event: MouseEvent) {
		this.navs.push(this.counter++);
		event.preventDefault();
	}

  get formValues() {
    return this.profileForm.controls;
  }

  populateProfile(user:any){
    this.profileForm.patchValue({
      id: user._id,
      created: user.created,
      isActive: user.isActive,
      isLoggedIn: user.isLoggedIn,
      name: user.name,
      email: user.email,
      password: user.password,
      status: user.status,
      updated: user.updated,
      userId: user.userId,
      userName: user.userName,
    });

  }

  viewProfile(content:any){
    this.modalService.open(content, { size: 'md', scrollable: true })
  }

  onSubmit(){
    this.formSubmitted = true;
    if(this.profileForm.valid)this.modalService.dismissAll();
  }


}

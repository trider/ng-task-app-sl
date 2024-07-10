import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ServicesModule } from '@app/services/services.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [Router, ServicesModule],
      imports:[LoginComponent, HttpClientTestingModule]
    })

    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should have a login form with a username (email) field', () => {
    expect(component.loginForm.get('email')).toBeTruthy();
  });

  it('should have a login form with a username (email) field', () => {
    expect(component.loginForm.get('email')).toContain('jgold@gmail.com');
  });

  


  it('should have a login form with a password field', () => {
    expect(component.loginForm.get('password')).toBeTruthy();
  });

 


});

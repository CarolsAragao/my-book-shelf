import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';  
import { MessageService } from 'primeng/api';
import { Auth } from '../../core/models/auth/auth.model';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let authServiceMock: any;

  beforeEach(async () => {
    authServiceMock = {
      login: jasmine.createSpy('login').and.returnValue(Promise.resolve())
    };

    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,  
        HttpClientModule             
      ],
    
      providers: [ MessageService, { provide: AuthService, useValue: authServiceMock }]  
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('loginForm should be created', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('form created with both controls: email and password', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.contains('email')).toBeTrue();
    expect(component.loginForm.contains('password')).toBeTrue();
  });

  it('email validators and email format validator', () => {
    const emailControl = component.loginForm.get('email');
  
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalse(); 
  
    emailControl?.setValue('not-an-email');
    expect(emailControl?.valid).toBeFalse(); 
  
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.valid).toBeTrue(); 
  });
  
  it('password should exist and should has 6 caracter min length', () => {
    const passwordControl = component.loginForm.get('password');
  
    passwordControl?.setValue('');
    expect(passwordControl?.valid).toBeFalse(); 
  
    passwordControl?.setValue('123');
    expect(passwordControl?.valid).toBeFalse(); 
  
    passwordControl?.setValue('123456');
    expect(passwordControl?.valid).toBeTrue();
  });

  it('empty form validator', () => {
    component.loginForm.setValue({ email: '', password: '' });
    expect(component.loginForm.valid).toBeFalse();
  });
  
  it('form was created perfectly', () => {
    component.loginForm.setValue({ email: 'test@email.com', password: '123456' });
    expect(component.loginForm.valid).toBeTrue();
  });

  it('if form is empty shouldnt call AuthService', async () => {
    component.loginForm.setValue({ email: '', password: '' }); 
    await component.onSubmit();
    expect(authServiceMock.login).not.toHaveBeenCalled();
  });

  it('if form is valid then call AuthService login method', async () => {
    const authData: Auth = new Auth();
    authData.email = 'test@email.com';
    authData.password = '123456'
    component.loginForm.setValue(authData);

    await component.onSubmit();

    expect(authServiceMock.login).toHaveBeenCalledWith(authData);
  });
});

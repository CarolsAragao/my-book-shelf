import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/services/auth/auth.service';
import { Auth } from '../../core/models/auth/auth.model';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ LoginService]
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _route: Router,
    private _loginService: LoginService
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  } 

  ngOnInit() {
    
  }
  async onSubmit() {

    const auth = new Auth();
    if (this.loginForm.valid) {
      auth.email = this.loginForm.value.email
      auth.password = this.loginForm.value.password

      this._auth.login(auth).subscribe(
        response => console.log('Login response:', Utils.decodeJWT(response)),
        error => console.error('Login error:', error)
      );      
    }
  }
}

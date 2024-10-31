import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/services/auth.service';
import { Auth } from '../../core/models/auth.model';
import { Route, Router } from '@angular/router';

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
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _route: Router
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const auth = new Auth();
    if (this.loginForm.valid) {
      auth.email = this.loginForm.value.email
      auth.password = this.loginForm.value.password

      if(this._auth.auth(auth)){
        this._route.navigate(['home'])
      } else {
        alert('Login Inválido')
      }
    }
  }
}

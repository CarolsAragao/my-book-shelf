import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/services/auth/auth.service';
import { Auth } from '../../core/models/auth/auth.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  providers: []
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(private _auth: AuthService, private _router: Router) { } 

  async onSubmit() {
    const auth = new Auth();
    if (this.loginForm.valid) {
      auth.email = this.loginForm.value.email
      auth.password = this.loginForm.value.password

      await this._auth.login(auth);
    }
  }

  addNewUser() {
    this._router.navigate(['addUser']);
  }
}

//TODO: CRIAR O ADD BOOK!!!!!!!!!!!!!!!

//TODO: loading
//TODO: retirada de mockups dos livros e criação das tabelas
//TODO: estudos de testes unitários
//TODO: criar componente de botão "voltar"
//TODO: criar o "recuperar senha"
//TODO: criar site para guardar imagens


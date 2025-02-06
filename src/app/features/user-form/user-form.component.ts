import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { UserCreate } from '../../core/models/user/user.model';
import { Utils } from '../../shared/utils/utils';
import { UserService } from '../../core/services/user.service';
import { cpf } from 'cpf-cnpj-validator';
import { Toast } from 'primeng/toast';
import { ToastService } from '../../shared/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [InputTextModule,
            FormsModule, 
            PasswordModule, 
            ButtonModule, 
            ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{
  
  userForm!: FormGroup
  user!: UserCreate

  constructor(private formbuilder: FormBuilder, 
              private _userService: UserService,
              private _toast: ToastService,
              private _router: Router){}

  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm() {
    this.userForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      passwordverification: ['', [Validators.required]]
    },{ validators: Utils.matchPassword('password', 'passwordverification') })
  }  
  async onSubmit() {
    this.user = this.userForm.getRawValue() as UserCreate;
    await this.AddUser();
  }

  async AddUser() {    
    const res = await this._userService.cadastrar(this.user);
    if(res.success){
      this._toast.showSuccess('Success', res.message);
      this._router.navigate(['']);
    } else {
      this._toast.showError('Error', res.message);
    }
  }

  cpfValidator(isCpf: string): boolean{
    return Utils.cpfValidator(isCpf);
  }

  lengthValidator(validatedinput: string, lenMin: number, lenMax?: number){
    if(lenMax !== null && lenMax !== undefined){
      if(validatedinput.length > lenMax || validatedinput.length < lenMin){
        return false;
      }
    } else if(validatedinput.length < lenMin){
      return false;
    }    
    return true;
  }
}
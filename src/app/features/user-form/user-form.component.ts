import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { UserCreate } from '../../core/models/user/user.model';
import { Utils } from '../../shared/utils/utils';
import { UserService } from '../../core/services/user.service';
import { cpf } from 'cpf-cnpj-validator';

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
              private _userService: UserService){}

  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm() {
    this.userForm = this.formbuilder.group({
      name: ['', [Validators.maxLength(50), Validators.minLength(5), Validators.required]],
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
    await this._userService.cadastrar(this.user);
  }

  cpfValidator(isCpf: string): boolean{
    return cpf.isValid(isCpf);
  }
}

import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [InputTextModule,FormsModule, PasswordModule, ButtonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{
 
  nome = ''
  email = ''
  password = ''
  passwordConfirmation = ''
  cpf = ''

  userForm!: FormGroup

  constructor(private formbuilder: FormBuilder){}

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: [null]
    })
  }
  onSubmit() {
    console.log('nome', this.userForm.value);    
    // console.log('email', this.email);    
    // console.log('password', this.password);    
  }
}

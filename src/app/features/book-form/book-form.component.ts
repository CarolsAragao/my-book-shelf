import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { BookService } from '../../core/services/book/book.service';
import { BookCreate } from '../book/book';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [InputTextModule,
            FormsModule, 
            PasswordModule, 
            ButtonModule, 
            ReactiveFormsModule,
            CalendarModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent{
  bookForm!: FormGroup
  book!: BookCreate;

  constructor(private formBuilder: FormBuilder, 
              private bookService: BookService,
              private toast: ToastService,
              private authService: AuthService,
              private router: Router) {

      this.bookForm = this.formBuilder.group({
        title:['', [Validators.required]],
        author: [''],
        publisher: [''],
        releasedDate: [''],
        edition: [''],
        description: ['', [Validators.required]],
        cover: [''],
      })
  }
  onSubmit() {
    this.book = this.bookForm.getRawValue() as BookCreate;     
    this.book.createdBy = this.authService.getUserId();
    this.addBook();  
  }

  addBook() {
    this.bookService.create(this.book).subscribe(res => {
      if(res.success){
        this.toast.showSuccess('Success', res.message);
        this.router.navigate(['home']);
      } else {
        this.toast.showError('Error', res.message);
      }
    })
  }
}

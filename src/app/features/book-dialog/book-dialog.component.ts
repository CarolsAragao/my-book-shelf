import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { LimitCharsPipe } from '../../shared/pipes/limitChars.pipe';
import { Book } from '../book/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-book-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule,CardModule,LimitCharsPipe],
  templateUrl: './book-dialog.component.html',
  styleUrl: './book-dialog.component.css'
})
export class BookDialogComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() selectedBook: Book = new Book();
  @Output() close = new EventEmitter<void>();
  useLimitChars = false;
  
  ngOnInit() {
    console.log('BOOK', this.selectedBook);
    
  }
  
  onHide() {
    this.close.emit(); 
  }
}

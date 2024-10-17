import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, BookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { BookComponent } from "../book/book.component";
import { FooterComponent } from "../footer/footer.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
              NavComponent, 
              BookComponent, 
              FooterComponent, 
              InputTextModule,
              FormsModule,
              InputGroupModule,
              InputGroupAddonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: any;
  filter = '';  
}

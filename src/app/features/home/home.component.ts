import { Component, OnInit } from '@angular/core';
import { BookComponent } from "../book/book.component";
import { FooterComponent } from "../footer/footer.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { NavComponent } from '../nav/nav.component';
import { Route, Router } from '@angular/router';
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
export class HomeComponent implements OnInit {
  user: any;
  filter = '';

  constructor(private _router: Router){}
  ngOnInit() {
    const navigation = this._router.getCurrentNavigation();
    this.user = navigation?.extras.state?.['data'];
    console.log('Objeto recebido:', this.user);
  }
}

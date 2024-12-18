import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../../core/services/auth/auth.service';
import { User } from '../../core/models/user/user.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  imports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    MenuComponent
]
})
export class NavComponent  implements OnInit{
  items: MenuItem[] | undefined;
  userLoged = new User();

  constructor(private _auth: AuthService) {}
    ngOnInit() {
        this.buildingNav();   
        this.setLogedUser();
    }

    buildingNav() {
        this.items = [
            {
                label: 'Profile',
                icon: 'pi pi-user'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command: () => this._auth.logout(),
            }
        ];
    }

    setLogedUser() {
        this.userLoged = this._auth.getUser();        
    }
}

import { Component, OnInit } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MegaMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit{
  items: MegaMenuItem[] | undefined;

  constructor(private _router: Router) {}
 
    ngOnInit() {
      this.items = [
        {
            label: 'User',
            items: [
                [
                    {
                        items: [
                            { label: 'Add User', command: () => this._router.navigate(['addUser']) }                          
                        ],
                    },
                ]         
            
            ]
        },
        {
            label: 'Books',
            items: [
                [
                    {
                        items: [
                            { label: 'My Books' }
                          
                        ],
                    }
                ]              
            ]
        }      
    ];
  }
}

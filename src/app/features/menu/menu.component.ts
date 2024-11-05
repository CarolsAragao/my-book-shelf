import { Component, OnInit } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MegaMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit{
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            icon: 'pi pi-bars',
            items: [
                [
                    {
                        label: 'My Shelf'
                        // items: [{ label: 'Accessories' }]
                    }
                ]                  
           
            ]
        }     
    ]    
  }
}

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MegaMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MenuComponent implements OnInit{
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Menu',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                    }
                ]                  
           
            ]
        }     
    ]
    console.log('items', this.items);
    
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'nav', component: NavComponent},
{path: 'menu', component: MenuComponent}
];

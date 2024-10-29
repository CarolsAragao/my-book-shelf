import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'nav', component: NavComponent},
{path: 'menu', component: MenuComponent},
{path: '', component: LoginComponent}
];

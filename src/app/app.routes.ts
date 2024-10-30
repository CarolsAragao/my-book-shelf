import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { LoginComponent } from './features/login/login.component';
import { NavComponent } from './features/nav/nav.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'nav', component: NavComponent},
{path: 'menu', component: MenuComponent},
{path: '', component: LoginComponent}
];

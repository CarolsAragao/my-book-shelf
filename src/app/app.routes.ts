import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'nav', component: NavComponent}
];

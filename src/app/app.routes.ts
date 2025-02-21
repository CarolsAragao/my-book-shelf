import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { LoginComponent } from './features/login/login.component';
import { NavComponent } from './features/nav/nav.component';
import { authGuard } from './core/guard/auth.guard';
import { UserFormComponent } from './features/user-form/user-form.component';
import { BookFormComponent } from './features/book-form/book-form.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent, canActivate: [authGuard]},
{path: 'nav', component: NavComponent, canActivate: [authGuard]},
{path: 'menu', component: MenuComponent, canActivate: [authGuard]},
{path: '', component: LoginComponent},
{path: 'addUser', component: UserFormComponent},
{path: 'addBook', component: BookFormComponent}
];

import { Injectable } from '@angular/core';
import { Auth } from '../../models/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth(auth: Auth){
    if(auth.email === 'admin@gmail.com' && auth.password === '123') return true;
    return false;
  }
}

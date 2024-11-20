import { Injectable } from '@angular/core';
import { Auth } from '../../models/auth/auth.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ApiResponse } from '../../models/base/base.model';
import { Router } from '@angular/router';
import { User } from '../../models/user/user.model';
import { ToastService } from '../../../shared/toast/toast.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7052/api/Auth';

  constructor(public http: HttpClient,
              private _router: Router,
              private _message: ToastService
   ){}

  async login(auth: Auth) {
    const params = new HttpParams()
      .set('email', auth.email)
      .set('password', auth.password);

     firstValueFrom(this.http.get<ApiResponse<any>>(`${this.apiUrl}/login`, {
      params: params
    })).then(res => {
      if (res.success) {
        localStorage.setItem('token', res.data);
        this._router.navigate(['home'])
      } else {
        this._message.showError('Error!', res.message);
      }
    });
  }

  isAuthenticated(): boolean {            
    return !!localStorage.getItem('token');
  }

  getUser() {  
    const decodedToken = this.getTokenDecoded();
    const user = new User(decodedToken);
    return user; 
  } 
  getUserEmail() {  
    const decodedToken = this.getTokenDecoded();
    return decodedToken?.email || null; 
  }  

  getUserId() {  
    const decodedToken = this.getTokenDecoded();    
    return decodedToken?.Guid || null; 
  } 

  getUserName() {  
    const decodedToken = this.getTokenDecoded();    
    return decodedToken?.sub || null; 
  } 

  getTokenDecoded() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return null; 
      } 
      const payload = token.split('.')[1]; 
      const decodedPayload = atob(payload); 
      return JSON.parse(decodedPayload); 
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null; 
    }
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
}
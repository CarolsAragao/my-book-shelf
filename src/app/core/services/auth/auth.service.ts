import { Injectable } from '@angular/core';
import { Auth } from '../../models/auth/auth.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ApiResponse } from '../../models/base/base.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7052/api/Auth';

  constructor(public http: HttpClient,
              private _router: Router
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
        alert(res.message);
      }
    });
  }

  isAuthenticated(): boolean {   
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
}
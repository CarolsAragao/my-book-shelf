import { Injectable } from '@angular/core';
import { Auth } from '../../models/auth/auth.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7052/api/Auth';

  constructor(public http: HttpClient ){}

  login(auth: Auth): Observable<string> {
    const params = new HttpParams()
      .set('email', auth.email)
      .set('password', auth.password); 
    
      return this.http.get(`${this.apiUrl}/login`, { 
        responseType: 'text', 
        params: params 
      });
  }
}
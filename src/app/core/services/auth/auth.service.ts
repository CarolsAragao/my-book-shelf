import { Injectable } from '@angular/core';
import { Auth } from '../../models/auth/auth.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7052/api/Auth';

  constructor(public http: HttpClient ){}

  async login<T>(auth: Auth): Promise<T> {
    const params = new HttpParams()
      .set('email', auth.email)
      .set('password', auth.password);

    return firstValueFrom(this.http.get<T>(`${this.apiUrl}/login`, {
      params: params
    }));
  }
}
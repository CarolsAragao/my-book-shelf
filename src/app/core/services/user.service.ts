import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserCreate } from '../models/user/user.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/base/base.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUser = environment.apiUrl

  constructor(private _httpClient: HttpClient) { }

  cadastrar(userCreate: UserCreate): Observable<ApiResponse<string>> {
    return this._httpClient.post<ApiResponse<string>>(`${this.apiUser}User`, userCreate);
  }
}

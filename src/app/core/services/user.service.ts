import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserCreate } from '../models/user/user.model';
import { ApiResponse } from '../models/base/base.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUser = environment.apiUrl

  constructor(private _httpClient: HttpClient) { }

   public cadastrar(userCreate: UserCreate): Promise<ApiResponse<string>> {
     return lastValueFrom(this._httpClient.post<ApiResponse<string>>(`${this.apiUser}User`, userCreate));      
  }
}

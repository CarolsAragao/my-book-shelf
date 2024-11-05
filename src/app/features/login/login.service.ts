import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  controller = 'Login';
  constructor(public http: HttpClient,
              private _baseService: BaseService
  ) {} 

  getLogin() {
    return this._baseService.get(this.controller);
  }
}

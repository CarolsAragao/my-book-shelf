import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BaseService {
	apiUrl = 'https://localhost:7052/api';

	constructor(public http: HttpClient) {}
  get<T>(controller: string): Observable<T> {
    return this.http.get<any>(`${this.apiUrl}/${controller}`);
  }
}


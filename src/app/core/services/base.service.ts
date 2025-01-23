import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})

export class BaseService {
	apiUrl = environment.apiUrl;

	constructor(public http: HttpClient) {}
  get<T>(controller: string): Observable<T> {
    return this.http.get<any>(`${this.apiUrl}/${controller}`);
  }
}


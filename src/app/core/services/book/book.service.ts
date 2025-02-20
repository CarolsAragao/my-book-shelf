import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { firstValueFrom, Observable } from 'rxjs';
import { Book } from '../../../features/book/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.apiUrl;

  constructor(private httpCliente: HttpClient) { }

  get(): Observable<Book[]>{
    const res = this.httpCliente.get<Book[]>(`${this.url}Book`);
    return res;
  }

}

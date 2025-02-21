import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { firstValueFrom, Observable } from 'rxjs';
import { Book, BookCreate } from '../../../features/book/book';
import { ApiResponse } from '../../models/base/base.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.apiUrl;

  constructor(private httpCliente: HttpClient) { }

  get(): Observable<ApiResponse<Book[]>>{
    const res = this.httpCliente.get<ApiResponse<Book[]>>(`${this.url}Book`);
    return res;
  }

  create(book: BookCreate): Observable<ApiResponse<boolean>> {
    const res = this.httpCliente.post<ApiResponse<boolean>>(`${this.url}Book`, book);
    return res;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { firstValueFrom, Observable } from 'rxjs';
import { Book, BookCreate } from '../../../features/book/book';
import { Result } from '../../models/base/base.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.apiUrl;

  constructor(private httpCliente: HttpClient) { }

  get(): Observable<Result<Book[]>>{
    const res = this.httpCliente.get<Result<Book[]>>(`${this.url}Book`);
    return res;
  }

  create(book: BookCreate): Observable<Result<boolean>> {
    const res = this.httpCliente.post<Result<boolean>>(`${this.url}Book`, book);
    return res;
  }

}

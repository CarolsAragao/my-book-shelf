import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment.development';
import { USUARIO_STRING } from '../../../../../service/db-data';
import { provideHttpClient } from '@angular/common/http';
import { ToastService } from '../../../shared/toast/toast.service';
import { MessageService } from 'primeng/api';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  let toastMessageSpy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, MessageService,
        provideHttpClient(), 
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('User Found', () => {
    const req = httpTestingController.expectOne(environment.apiUrl + 'Auth/login');

    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('email')).toBe('relatividade@gmail.com');
    expect(req.request.params.get('password')).toBe('e=mc2');

    req.flush(JSON.parse(USUARIO_STRING));

  });


});

import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ToastService } from '../../../shared/toast/toast.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// describe('AuthService', () => {
//   let service: AuthService;
//   let httpTestingController: HttpTestingController;
//   let toastServiceSpy: jasmine.SpyObj<ToastService>;
//   let routerSpy: jasmine.SpyObj<Router>;

//   beforeEach(() => {
//     const toastSpy = jasmine.createSpyObj('ToastService', ['showError']);
//     const routerMock = jasmine.createSpyObj('Router', ['navigate']);

//     TestBed.configureTestingModule({
//       providers: [
//         AuthService,
//         MessageService,
//         { provide: ToastService, useValue: toastSpy },
//         { provide: Router, useValue: routerMock },
//         provideHttpClient(),
//         provideHttpClientTesting(),
//       ],
//     });

//     service = TestBed.inject(AuthService);
//     httpTestingController = TestBed.inject(HttpTestingController);
//     toastServiceSpy = TestBed.inject(ToastService) as jasmine.SpyObj<ToastService>;
//     routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
//   });

//   afterEach(() => {
//     httpTestingController.verify(); // Verifica se não existem requisições pendentes
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

  // it('should login successfully and navigate to home', async () => {
  //   const mockResponse = { success: true, data: 'mock-token' };
  //   const auth = { email: 'relatividade@gmail.com', password: 'e=mc2' };

  //   service.login(auth);

  //   const req = httpTestingController.expectOne(`${service.apiUrl}Auth/login`);
  //   expect(req.request.method).toBe('GET');
  //   expect(req.request.params.get('email')).toBe(auth.email);
  //   expect(req.request.params.get('password')).toBe(auth.password);

  //   req.flush(mockResponse);

  //   expect(localStorage.getItem('token')).toBe(mockResponse.data);
  //   expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  //   expect(toastServiceSpy.showError).not.toHaveBeenCalled();
  // });

//   it('should fail login and show error message', async () => {
//     const mockResponse = { success: false, message: 'Invalid credentials' };
//     const auth = { email: 'wrong@gmail.com', password: 'wrong-pass' };
  
//     service.login(auth); // Chamada do método que queremos testar
  
//     // Verifica se a requisição foi feita para a URL correta com os parâmetros esperados
//     const req = httpTestingController.expectOne((request) => 
//       request.url === `${service.apiUrl}/login` && 
//       request.params.get('email') === auth.email &&
//       request.params.get('password') === auth.password
//     );
    
//     expect(req).toBeTruthy(); // Confirma que a requisição foi encontrada
//     expect(req.request.method).toBe('GET'); // Confirma que o método é GET
  
//     // Retorna a resposta simulada da API
//     req.flush(mockResponse);
  
//     // Verifica se o comportamento esperado ocorreu
//     expect(localStorage.getItem('token')).toBeNull();
//     expect(routerSpy.navigate).not.toHaveBeenCalled();
//     expect(toastServiceSpy.showError).toHaveBeenCalledWith('Error!', mockResponse.message);
//   });

//   it('should return user email from decoded token', () => {
//     const mockTokenPayload = { email: 'relatividade@gmail.com' };
//     const mockToken = `header.${btoa(JSON.stringify(mockTokenPayload))}.signature`;

//     localStorage.setItem('token', mockToken);

//     const email = service.getUserEmail();
//     expect(email).toBe(mockTokenPayload.email);
//   });

//   it('should logout and clear token', () => {
//     localStorage.setItem('token', 'mock-token');
//     service.logout();

//     expect(localStorage.getItem('token')).toBeNull();
//     expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
//   });
// });

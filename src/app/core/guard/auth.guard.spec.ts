// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { authGuard } from './auth.guard';
// import { AuthService } from '../services/auth/auth.service';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

// describe('AuthGuard', () => {
//   let authService: jasmine.SpyObj<AuthService>;
//   let router: jasmine.SpyObj<Router>;
//   let activate: jasmine.SpyObj<ActivatedRouteSnapshot>;
//   let routerSnapshot: jasmine.SpyObj<RouterStateSnapshot>;


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       providers: [
//         authGuard,
//         {
//           provide: AuthService,
//           useValue: jasmine.createSpyObj('AuthService', ['isAuthenticated']),
//         },
//         {
//           provide: Router,
//           useValue: jasmine.createSpyObj('Router', ['navigate']),
//         },
//         {
//           provide: ActivatedRouteSnapshot,
//           useValue: jasmine.createSpyObj('ActivatedRouteSnapshot', ['url'])
//         },
//         {
//           provide: RouterStateSnapshot,
//           useValue: jasmine.createSpyObj('RouterStateSnapshot', ['url'])
//         }
//       ],
//     });

//     authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
//     router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
//     activate = TestBed.inject(ActivatedRouteSnapshot) as jasmine.SpyObj<ActivatedRouteSnapshot>;
//     routerSnapshot = TestBed.inject(RouterStateSnapshot) as jasmine.SpyObj<RouterStateSnapshot>;

//   }); 

//   it('should allow access if authenticated', async () => {
//     authService.isAuthenticated.and.returnValue(true);

//     const result = await authGuard(activate, routerSnapshot);

//     expect(result).toBeTrue();
//     expect(router.navigate).not.toHaveBeenCalled();
//   });

//   // it('should handle authentication service errors', async () => {
//   //   authService.isAuthenticated.and.throwError('Authentication error');

//   //   try {
//   //     await authGuard(activate, routerSnapshot);
//   //   } catch (error) {
//   //     // Verificar se o erro foi tratado corretamente
//   //     expect(error).toEqual('Authentication error');
//   //   }
//   // });
// });
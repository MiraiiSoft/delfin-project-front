import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor( private authService: AuthService, private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if( !valid ){
            this.authService.logout();
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }
  canActivateChild(): Observable<boolean> | boolean {
    return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if( !valid ){
            this.authService.logout();
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if( !valid ){
            this.authService.logout();
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }
}

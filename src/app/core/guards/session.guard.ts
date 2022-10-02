import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private _cookieService: CookieService, private _router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }
  
  checkCookieSession(): boolean{

    try {

      const token: boolean = this._cookieService.check('token');
      console.log('token: ', token)

      if(!token){  
        this._router.navigate(['/','auth']);
      }
        return token;
        
    } catch (error) {
      console.log('Algo pasa en el guard de auth', error)
      return false;
    }
  }
}

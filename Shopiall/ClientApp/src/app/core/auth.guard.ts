import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { TokenStorageService, TOKEN_KEY } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private tokenManager: TokenStorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = route.queryParamMap.get('token');
    if (this.isValidToken(token)) {
      this.tokenManager.saveToken(token);
      return true;
    }
    token = localStorage.getItem(TOKEN_KEY);
    if (this.isValidToken(token)) {
      return true;
    }

    this.router.navigate(['authentication/login']);
    return false;
  }

  private isValidToken(token: string): boolean {
    return token && !this.jwtHelper.isTokenExpired(token);
  }
}

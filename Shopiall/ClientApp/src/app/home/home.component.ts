import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from '../core/token-storage.service';
import { isNullOrUndefined } from '../shared/helpers/instance.helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jwtService: JwtHelperService,
    private tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {
    this.initRouteParams();
  }

  initRouteParams(): void {
    let token = this.route.snapshot.queryParamMap.get('token');
    token = isNullOrUndefined(token)
      ? this.tokenStorageService.getToken()
      : token;

    if (!isNullOrUndefined(token) || !this.jwtService.isTokenExpired(token)) {
      this.tokenStorageService.saveToken(token);
      this.router.navigate(['dashboard/upsells']);
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {

	url: string;

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.loginService.online()) {

			this.loginService.event.emit(this.loginService.online());
      return true;
    }

		this.router.navigate(['/login'], { queryParams: { url: state.url }});
		return false;
	}
}

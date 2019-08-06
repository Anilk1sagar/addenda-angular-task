import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

// Services
import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		// return this.authService.getAccessToken().map((token) => {

        //     if (token) {
        //         console.log('User logged in');
        //         return true;
		// 	} else {	
		// 	    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
		// 	}
        //     console.log('User NOT logged in');
		// 	return false;
		// }).first();

		if (!this.authService.isLoggedIn()) {
			this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
			return false;
		}

		return true;
	}
	
	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		if (!this.authService.isLoggedIn()) {
			this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
			return false;
		}

		return true;

		// return this.authService.getAccessToken().map((token) => {

        //     if (token) {
        //         console.log('User logged in');
        //         return true;
		// 	} else{
		// 	    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
		// 	}

        //     console.log('User NOT logged in');
		// 	return false;
        // }).first();
	}
}


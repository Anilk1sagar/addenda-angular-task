import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// Services
import { AuthService } from '../auth/auth.service';

// Models
import { ModelToken } from 'src/app/models';


@Injectable()
export class InterceptorAuthService implements HttpInterceptor {

	constructor(private serviceAuth: AuthService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const url = request.url;

        // url.includes('api/auth') || url.includes(makeAdmin)

		if (url.includes('relyingparty/verifyPassword')) {

			return next.handle(request);
		} else {

			return this.serviceAuth.getAccessToken().pipe(mergeMap((token: ModelToken, htt) => {

				if (token) {
					// clone and modify the request
					request = request.clone({
						setHeaders: {
						    Authorization: `Bearer ${token.idToken}`
						}
					});
				}

				return next.handle(request);
			}));
		}
	}
}

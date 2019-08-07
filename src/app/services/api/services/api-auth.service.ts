import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { flatMap, map  } from 'rxjs/operators';

// Services
import { Postman, POSTMAN } from '../postman';
import { ApiService } from '../common/api.service';
import { AuthService } from '../../auth';

// Models
import { ModelPostLogin, ModelToken, ModelResLogin } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {


	constructor(
		private authService: AuthService, 
		private apiService: ApiService,
		@Inject(POSTMAN) public postman: Postman
	) {

		console.log('postman', postman);
	}


	verify(data: ModelPostLogin): Observable<ModelResLogin> {

		if (!data) return;
		
		console.log('Api Data: ', data);

		const urlPath = this.postman.auth().login;
			
		return this.apiService.post(urlPath, data)
		.pipe(
			map((value: ModelResLogin) => {
				return value;
			})
		);
	}



}

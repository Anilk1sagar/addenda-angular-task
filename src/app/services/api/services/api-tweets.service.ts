import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { ApiService } from '../common/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { POSTMAN, Postman } from '../postman';
import { LocalStorageService } from '../../local/local-storage.service';

// Models
import { Tweet } from 'src/app/models/tweet.model';
import { ModelToken } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class ApiTweetsService {

	constructor(
		private apiService: ApiService,
		private authService: AuthService,
		private localStorageService: LocalStorageService,
		@Inject(POSTMAN) public postman: Postman
	) { }

	getTweets(): Observable<Tweet[]> {

		const token: ModelToken = JSON.parse(this.localStorageService.getData(LocalStorageService.KEY.accessToken));

        // cosole.log(data);
        const params = {
            // offset: offset,
			// limit: limit,
			// auth: token.idToken
        };

        const urlPath = this.postman.tweet().getAll;
        return this.apiService.get(urlPath, params);
	}
	

}

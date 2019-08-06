import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { LocalStorageService } from './../local/local-storage.service';

// Models
import { ModelToken } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private localStorageService: LocalStorageService) { }

    // getAccessToken(): Observable<ModelToken> {

    //     return new Observable<ModelToken>((observer) => {

    //         this.localStorageService.getToken('accessToken').subscribe(success => {

    //             const date = moment.unix(success.expiresAt);
    //             const compare = date.diff(moment());

    //             observer.next(success);
    //             observer.complete();

    //         });
    //     });
	// }
	
	getAccessToken(): Observable<ModelToken> {
 	    return new Observable<ModelToken>((observer) => {

            const token: ModelToken = JSON.parse(this.localStorageService.getData(LocalStorageService.KEY.accessToken));
			observer.next(token);
			observer.complete();
        });
	}


	isLoggedIn(): boolean {
		const token: ModelToken = JSON.parse(this.localStorageService.getData(LocalStorageService.KEY.accessToken));

		if (token && token.idToken) {
			return true;
		}

		return false;
	}
	

	logOut(): boolean {
		this.localStorageService.removeData((LocalStorageService.KEY.accessToken));
		return true;
	}

}

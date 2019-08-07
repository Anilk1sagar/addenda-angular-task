import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

// Servcies
import { AuthService } from 'src/app/services/auth';
import { ModelToken, ModelPostLogin, ModelResLogin } from 'src/app/models';
import { ApiAuthService } from 'src/app/services/api/services/api-auth.service';
import { LocalStorageService } from 'src/app/services/local/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	_mFormGroup: FormGroup;
	_mInProgress = false;

	constructor(
		private formBuilder: FormBuilder,
		public snackBar: MatSnackBar,
		private route: ActivatedRoute,
		private router: Router,
		private serviceAuth: AuthService,
		private apiAuthService: ApiAuthService,
		private localStorageService: LocalStorageService
	) { 

		this.serviceAuth.getAccessToken().subscribe((token: ModelToken) => {

			// console.log("Token: ", token);

			if (token) {
				console.log('Token Found');
				this.router.navigateByUrl('/home');
			}
		});
	}

	ngOnInit() {

		this._mFormGroup = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});
	}


	_mOnSubmit() {
		if (this._mInProgress) return;

		this._mInProgress = true;

		let value = this._mFormGroup.getRawValue()
		console.log('onsubmit: ', value);

		const modelData: ModelPostLogin = {
			email: value.email,
			password: value.password,
			returnSecureToken: true
		};

		this.loginServer(modelData);
	}





	/* ******************************************************************************************************************
	*                                                    Request Api Server
	*/


	loginServer(data: ModelPostLogin) {

		console.log('login server:', data);

		this.apiAuthService.verify(data).subscribe((value: ModelResLogin) => {

			console.log('res: ', value);
			let token = new ModelToken();
			token.idToken = value.idToken;
			this.localStorageService.addData(LocalStorageService.KEY.accessToken, token);
			
			this._mInProgress = false;
			this.snackBar.open('Login Successful!', null, {duration: 3000});
			this.router.navigateByUrl('/home');
		}, error => {
			console.log("error", error);
			this._mInProgress = false;
		});
	}




}

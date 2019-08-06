import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// Files
import { UtilValidator } from './../../utils/validators';

// Services
//import { ServiceApiPasswordless } from './../../services/api/services';

// Models
import { ModelToken } from '../../models';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	_mFormGroup: FormGroup;

    constructor(
		private formBuilder: FormBuilder,
		private utilValidator: UtilValidator,
		//private serviceApiPasswordless: ServiceApiPasswordless
	) { 

	}

    ngOnInit() {

		this._mFormGroup = this.formBuilder.group({
			// customToken: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
			// selectedGroup: ['', [Validators.required, Validators.minLength(5)]],
		});
	}
	





	/* ******************************************************************************************************************
	*                                                    error
	*/

	getErrorMessageEmail() {
		return this.utilValidator.getErrorMessageEmail(this._mFormGroup.controls['email']);
	}



	/* ******************************************************************************************************************
	*                                                    Request Api Server
	*/


}

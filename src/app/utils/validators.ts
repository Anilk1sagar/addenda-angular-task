import { FormGroup, ValidationErrors, AbstractControl } from "@angular/forms";
import { InjectionToken, Injectable } from "@angular/core";


// custom validator to check that two fields match
export let UTIL_VALIDATOR = new InjectionToken('util.validator');

@Injectable({
    providedIn: 'root'
})
export class UtilValidator {

    mustMatch(controlName: string, matchingControlName: string): ValidationErrors {
        
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
    
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
    
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }

    getErrorMessageEmail(control: AbstractControl) {

        // console.log(this._mFormGroup.controls['email'].errors)
        return control.hasError('required') ? 'You must enter a value' :
            control.hasError('email') ? 'Not a valid email' :
            '';
    }


    
}
import { FormGroup, ValidationErrors, AbstractControl } from "@angular/forms";

export class CustomValidator {

    static validationConfirmPass( pass: string, confirmPass: string ): ValidationErrors | null {
        if( pass != confirmPass ) return { isDifferent: true }
        return null;
    }

}
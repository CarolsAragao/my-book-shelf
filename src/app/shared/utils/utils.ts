import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { cpf } from "cpf-cnpj-validator";
import { jwtDecode } from "jwt-decode";
export class Utils {

  static decodeJWT(token: string) {
      const decoded = jwtDecode(token);
      return decoded;
    }  

    static equalTo(otherField: string): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
          const fieldValue = control.value
          const otherFieldValue = control.root.get(otherField)?.value

          if (fieldValue !== otherFieldValue) {
              return { equalTo: true}
          }
          return null
      }
  }  

  static matchPassword(password: string, passwordverification: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass = formGroup.get(password)?.value;
      const confirmPass = formGroup.get(passwordverification)?.value;

      return pass === confirmPass ? null : { passwordMismatch: true };
    };  
  }

  static cpfValidator(isCpf: string): boolean{
    return cpf.isValid(isCpf);
  }
}
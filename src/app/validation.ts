import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

export class UsernameValidator {
    static checkPasswords(group: FormGroup) {
        const pass = group.controls.password.value;
        const confirmPass = group.controls.confirmPass.value;

        return pass === confirmPass ? null : { notSame: true };
    }

    static passwordValid() {
       return  Validators.minLength(6) && Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    }
static errorLogin(){
   return  {
        'mail': [
                { type: 'required', message: `Email is required` },
                { type: 'minlength', message: 'Email must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Email cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your email must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your email has already been taken.' }
            ],
            'password': [
                { type: 'required', message: `Password is required` },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' },
                { type: 'maxlength', message: 'Password cannot be more than 6 characters long.' },
                { type: 'pattern', message: 'Your password must contain  numbers and letters.' }            ],
  };
}
}

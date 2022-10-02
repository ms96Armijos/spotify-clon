import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {


  formLogin: FormGroup = new FormGroup({});

  errorSession: boolean = false;
  constructor(private _authService: AuthService, private cookie: CookieService, private _router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [ 
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    })
  }


  sendLogin(){
    const {email, password} = this.formLogin.value;
    this._authService.sendCredentials(email, password)
    .subscribe(responseOK => {
      console.log('ingresaste', responseOK);
      const { tokenSession, data} = responseOK;
      this.cookie.set('token', tokenSession, 4);
      this._router.navigate(['/','tracks']);
    },
    err => {
      this.errorSession = true;
      console.log('error en las credenciales')
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsernameValidator } from '../../validation';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loadingController: LoadingController, private activateRoute: ActivatedRoute,
    private router: Router, private fb: FormBuilder, public alertController: AlertController, private authService: AuthService) { }
  loginForm: FormGroup;
  validation_messages;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: [null, Validators.compose([
        UsernameValidator.passwordValid(), Validators.required
      ])]
    });
    this.validation_messages = UsernameValidator.errorLogin();
    console.log(this.validation_messages)
  }
  async logIn(form: NgForm) {
    const loading = await this.loadingController.create({
      message: "Loading..."
    });

    this.authService.login(form).subscribe(res => {
      console.log(res);

    });
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Log In',
      message: 'You are log in',
      buttons: ['OK']
    });

    await alert.present();
  }
}

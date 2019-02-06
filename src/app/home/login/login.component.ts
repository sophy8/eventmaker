import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loadingController: LoadingController, private activateRoute: ActivatedRoute,
    private router: Router, private fb: FormBuilder) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  async logIn(form: NgForm) {
    const loading = await this.loadingController.create({
      message: "Loading..."
    });
    console.log(form.value);
  }
}

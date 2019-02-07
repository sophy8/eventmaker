import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private loadingController: LoadingController, private activateRoute: ActivatedRoute,
    private router: Router, private fb: FormBuilder) { }
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  async signUp(form: NgForm) {
    const loading = await this.loadingController.create({
      message: "Loading..."
    });
    console.log(form);
  }
}

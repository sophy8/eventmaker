import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {
  profileForm: FormGroup;
  data;
  showOffer = false;
  @Output() submited: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder, private profile: ProfileService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'email': [null, Validators.required],
      'birthday': [null, Validators.required],
      'phone': [null, Validators.required]
    });
    this.getData();
  }
  setProfile(event) {
    this.showOffer = true;
    this.submited.emit(this.profileForm.value);
  }
  getData() {
    this.data = this.profile.getInfo();
    console.log(this.data);
    if (this.data) {
      this.profileForm.setValue({
        'name': this.data.name,
        'surname': this.data.surname,
        'email': this.data.email,
        'birthday': this.data.birthday,
        'phone': this.data.phone
      });
    }
    if (this.data) {
      this.showOffer = true;
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  selectedFile: File;
  imagePreview;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
  }
  uploadImage(event) {
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
    console.log(this.selectedFile);
    this.profile.sendImg(this.selectedFile);
  }
  formSubmit(event) {
    this.profile.sendInfo(event);
  }
}

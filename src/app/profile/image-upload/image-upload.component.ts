import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Input() image;
  @Input() selected;
  @Output() upload: EventEmitter<any> = new EventEmitter;
  srcImg;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
  //  this.getImg();
  }
  onFileChanged(event) {
    this.upload.emit(event);
  }
  getImg() {
  this.srcImg = this.profile.getImg();
  }
}

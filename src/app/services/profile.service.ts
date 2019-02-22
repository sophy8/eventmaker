import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
const key = 'profile';
const keyImg = 'profile_img';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private storage: StorageService) { }
  sendInfo(data) {
    this.storage.setData(key, data);
  }
  getInfo() {
   return this.storage.getData(key);
  }
  sendImg(data) {
    this.storage.setImg(keyImg, data);
  }
  getImg() {
   return this.storage.getImg(keyImg);
  }
}

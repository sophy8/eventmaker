import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DetailedInformationComponent } from './detailed-information/detailed-information.component';
import { ProfileService } from '../services/profile.service';
const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage, ImageUploadComponent, DetailedInformationComponent],
  providers: [ProfileService]
})
export class ProfilePageModule { }

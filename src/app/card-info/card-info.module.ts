import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CardInfoService } from '../services/card-info.service';
import { CardInfoPage } from './card-info.page';

const routes: Routes = [
  {
    path: '',
    component: CardInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardInfoPage],
  providers: [CardInfoService]
})
export class CardInfoPageModule { }

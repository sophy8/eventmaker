import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DashboardPage } from './dashboard.page';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { ModalDashboardComponent } from '../components/modal-dashboard/modal-dashboard.component';
import { FiltersPipe } from '../filters.pipe';
import { DasboardCardComponent } from './dasboard-card/dasboard-card.component';
import { DasboardNotFilteredCardComponent } from './dasboard-not-filtered-card/dasboard-not-filtered-card.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage, FilterSectionComponent,
    ModalDashboardComponent, FiltersPipe, DasboardCardComponent, DasboardNotFilteredCardComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  entryComponents: [
    ModalDashboardComponent
  ]
})
export class DashboardPageModule { }

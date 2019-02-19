import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { dasboardItem } from '../model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  item;
  constructor(private menu: MenuController, private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) { }

  ngOnInit() {
    this.item = dasboardItem;
  }


}

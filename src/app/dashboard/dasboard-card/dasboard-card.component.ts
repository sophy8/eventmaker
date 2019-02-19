import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { dasboardItem } from '../../model';
@Component({
  selector: 'app-dasboard-card',
  templateUrl: './dasboard-card.component.html',
  styleUrls: ['./dasboard-card.component.scss']
})
export class DasboardCardComponent implements OnInit, OnChanges {
  @Input() input;
  item;
  notFiltered: Boolean = true;
  constructor(private menu: MenuController, private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) { }

  ngOnInit() {
    this.item = dasboardItem;
    console.log(this.item);
  }
  ngOnChanges(changes) {
    console.log(this.input);
    this.item = dasboardItem;
    this.isFiltered();
  }
  isFiltered() {
    this.item.forEach(data => {
      data.show = false;
      if (data.name === this.input.name) {
        data.show = true;
        this.notFiltered = false;
      }
      data.hashtags.forEach(element => {
        if (element === this.input.name) {
          data.show = true;
          this.notFiltered = false;
        }
        this.input.hashtags.forEach(el => {
          if (el === element) {
            data.show = true;
            this.notFiltered = false;
          }
        });
      });
    });
  }
  notClickFilter() {
    this.item.forEach(data => {
      data.show = true;
    });
  }
}

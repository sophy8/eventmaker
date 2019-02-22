import { Component, OnInit } from '@angular/core';
import { CardInfoService } from '../services//card-info.service';
@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.page.html',
  styleUrls: ['./card-info.page.scss'],
})
export class CardInfoPage implements OnInit {
  data;
  constructor(private service: CardInfoService) { }

  ngOnInit() {
    this.getItem();
  }
  getItem() {
    this.service.getEvent().subscribe((res) => {
      this.data = res;
    })
  }
}

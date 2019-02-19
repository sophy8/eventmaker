import { Component, OnInit } from '@angular/core';
import { dasboardItem } from '../../model';

@Component({
  selector: 'app-dasboard-not-filtered-card',
  templateUrl: './dasboard-not-filtered-card.component.html',
  styleUrls: ['./dasboard-not-filtered-card.component.scss']
})
export class DasboardNotFilteredCardComponent implements OnInit {
  item;
  constructor() { }

  ngOnInit() {
    this.item = dasboardItem;
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { dasboardItem } from '../../model';

@Component({
  selector: 'app-dasboard-not-filtered-card',
  templateUrl: './dasboard-not-filtered-card.component.html',
  styleUrls: ['./dasboard-not-filtered-card.component.scss']
})
export class DasboardNotFilteredCardComponent implements OnInit {
  item;
  @Output() gotopage: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.item = dasboardItem;
  }

  goToPage(event) {
this.gotopage.emit(event.el.id);
    //   let idItem = event.target.id;
    //   console.log(event.target.id)
    //  this.router.navigate([`/card-info/${idItem}`]);
  }
}

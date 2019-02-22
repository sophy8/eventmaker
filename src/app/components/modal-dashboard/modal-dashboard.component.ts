import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltersPipe } from '../../filters.pipe';
import { dasboardItem } from '../../model';

@Component({
  selector: 'app-modal-dashboard',
  templateUrl: './modal-dashboard.component.html',
  styleUrls: ['./modal-dashboard.component.scss']
})
export class ModalDashboardComponent implements OnInit {
  data = [];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.data = dasboardItem;
  }
  dismissModal() {
    this.modalController.dismiss();
  }
  choose(value) {
    this.modalController.dismiss(value);
  }
}

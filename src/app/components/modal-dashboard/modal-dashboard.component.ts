import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-dashboard',
  templateUrl: './modal-dashboard.component.html',
  styleUrls: ['./modal-dashboard.component.scss']
})
export class ModalDashboardComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss();
  }
}

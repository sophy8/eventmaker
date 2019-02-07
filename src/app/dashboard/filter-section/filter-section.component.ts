import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  ModalDashboardComponent } from '../../components/modal-dashboard/modal-dashboard.component';
@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalDashboardComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}

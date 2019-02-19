import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDashboardComponent } from '../../components/modal-dashboard/modal-dashboard.component';
@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {
  data;
  colors = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange'];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.representColor();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalDashboardComponent,
      componentProps: { value: 123 }
    });
    modal.onDidDismiss()
      .then((data) => {
        const user = data['data'];
        this.data = data['data'];
      });
    return await modal.present();
  }
  representColor() {
    let new_color = this.colors[Math.floor(Math.random() * this.colors.length)];
    console.log(new_color);
  }
}

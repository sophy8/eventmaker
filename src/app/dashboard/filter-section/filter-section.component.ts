import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDashboardComponent } from '../../components/modal-dashboard/modal-dashboard.component';
@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {
  data;
  colors = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange'];
  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    //  this.representColor();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalDashboardComponent
    });
    modal.onDidDismiss()
      .then((data) => {
        this.data = data['data'];
      });
    console.log('asdfghj');
    return await modal.present();
  }

  goToPage(event) {
    console.log(event);
    this.router.navigate([`/card-info/${event}`]);
  }
}

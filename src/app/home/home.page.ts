import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) { }
  ngOnInit() {

  }
  async goToPage(event) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    if (event.target.id === 'login') {
      this.router.navigate(['/home/login']); loading.dismiss();
    } else {
      this.router.navigate(['/home/signup']);
      loading.dismiss();
    }
  }
}

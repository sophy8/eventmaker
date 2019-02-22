import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { CardInfoPageModule } from './card-info//card-info.module';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
  { path: 'create-offer', loadChildren: './create-offer/create-offer.module#CreateOfferPageModule' },
  { path: 'card-info/:id', loadChildren: './card-info/card-info.module#CardInfoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

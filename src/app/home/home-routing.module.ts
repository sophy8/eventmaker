import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../home/login/login.component';
import { SignupComponent } from '../home/signup/signup.component';
import { HomePage } from './home.page';
export const loginroutes: Routes = [
    {
        path: '', component: HomePage,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginroutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

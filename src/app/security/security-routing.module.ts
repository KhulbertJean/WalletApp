import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SigninComponent, SignupComponent} from '@security/page';
import * as path from "path";
import {DashboardComponent} from "@dashboard/page";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  }, {
    path: 'signin',
    component: SigninComponent
  }, {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}

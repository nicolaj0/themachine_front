import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {CampsComponent} from "./Camp/camps/camps.component";
import {AuthGard} from "./auth/auth.gard";
import {AddCampComponent} from "./Camp/add-camp/add-camp.component";
import {DashboardComponent} from "./Camp/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'camp', component: DashboardComponent, canActivate: [AuthGard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard]
})
export class AppRoutingModule {
}

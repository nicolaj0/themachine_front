import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {DataService} from "./shared/data-service.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CampsComponent } from './Camp/camps/camps.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthService} from "./auth/auth.service";
import {CampService} from "./Camp/camp.service";
import { AddCampComponent } from './Camp/add-camp/add-camp.component';
import { DashboardComponent } from './Camp/dashboard/dashboard.component';
import {UIService} from "./shared/ui.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    CampsComponent,
    AddCampComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [DataService,AuthService,CampService,UIService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

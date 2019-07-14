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
import {AppMaterialModule} from "./app-material/app-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthService} from "./auth/auth.service";
import {UIService} from "./shared/ui.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import { TheMachineComponent } from './the-machine/the-machine.component';
import {MachineService} from "./the-machine/machine.service";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    TheMachineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [DataService,AuthService,MachineService,UIService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

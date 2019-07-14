import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataService} from "../../shared/data-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  maxDate: Date = new Date();

  constructor(private data: AuthService, private router: Router) {
  }

  ngOnInit() {

  }

  onSignin(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    this.data.login({username: email, password: password}).subscribe(success => {
        console.log("sucess");
      },
      err => console.error("failed"))

  }
}

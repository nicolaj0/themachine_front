import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataService} from "../../shared/data-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit() {

  }

  onSignin(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    this.data.login({username: email, password: password}).subscribe(success => {
        console.log("sucess");
        this.router.navigate(['/camps'])

      },
      err => console.error("failed"))

  }
}

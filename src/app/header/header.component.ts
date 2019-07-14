import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/data-service.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
  isAuth = false;

  constructor(private auth: AuthService){}

  onLogout(){
    this.auth.logout()
  }

  ngOnInit(): void {
    this.auth.authChange.subscribe(res => this.isAuth = res);
  }
}

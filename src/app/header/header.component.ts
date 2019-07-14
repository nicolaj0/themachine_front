import { Component } from '@angular/core';
import {DataService} from "../shared/data-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private data: DataService){}


  onLogout(){
    this.data.logout()
  }
}

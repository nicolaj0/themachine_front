import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/data-service.service";

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCamps().subscribe((response : any[]) =>{
      console.log(response)
    })
  }

}

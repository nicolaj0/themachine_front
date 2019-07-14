import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/data-service.service";
import {CampService} from "../camp.service";
import {MatTableDataSource} from "@angular/material";
import {Camp} from "../camp";

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit {
  displayedColumns: string[] = ['name','eventDate', 'locationCityTown', 'moniker'];
  dataSource: MatTableDataSource<Camp> = new MatTableDataSource<Camp>();

  constructor(private data: CampService) { }

  ngOnInit() {
    this.data.getCamps();
    this.data.getCampsUpdateListener().subscribe((response : any[]) =>{
      this.dataSource.data = response
    })
  }

  addCamp() {

  }
}

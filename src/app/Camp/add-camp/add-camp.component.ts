import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CampService} from "../camp.service";
import {Camp} from "../camp";

@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit {

  private loading: boolean;

  constructor(private campService: CampService) {
  }

  ngOnInit() {
    this.campService.getCampsUpdateListener().subscribe((response: any[]) => {
      this.loading = false;
    })
  }

  onAddCamp(f: NgForm) {
    this.loading = true;
    let camp = new Camp();
    camp.eventDate = f.value.campDate;
    camp.name = f.value.name;
    camp.moniker = f.value.moniker;
    this.campService.addCamp(camp)
    f.resetForm();


  }
}

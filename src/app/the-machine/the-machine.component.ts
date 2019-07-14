import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MachineService} from "./machine.service";
import {UserBevarage} from "./userBevarage";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-the-machine',
  templateUrl: './the-machine.component.html',
  styleUrls: ['./the-machine.component.css']
})
export class TheMachineComponent implements OnInit, AfterViewInit {
  @ViewChild(NgForm, {static: false}) beverageForm: NgForm
  loading = false;


  beverageTypes: any [] = [
    {id: 1, name: 'cafe'},
    {id: 2, name: 'thé'},
    {id: 3, name: 'chocolat'},
  ]
  max: 10;
  min: 0;
  step: 1;


  model: UserBevarage = new UserBevarage();

  constructor(private machineService: MachineService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.beverageChange.subscribe(p => {
      this.model = p;
      this.beverageForm.setValue({
        mug: p.useOwnMug
      })
    })

  }

  onMakeCoffee(f: NgForm) {
    this.loading = true
    /* let userBevarage = new UserBevarage();
     userBevarage.sugar = f.value.sugar;
     userBevarage.useOwnMug = f.value.mug;
     userBevarage.beverageType = f.value.beverage;*/

    this.machineService.beverageServed(this.model).subscribe(response => {
      this.loading = false
    })
  }

  ngAfterViewInit(): void {

  }
}

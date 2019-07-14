import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {MachineService} from "./machine.service";
import {UserBevarage} from "./userBevarage";
import {AuthService} from "../auth/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-the-machine',
  templateUrl: './the-machine.component.html',
  styleUrls: ['./the-machine.component.css']
})
export class TheMachineComponent implements OnInit {
  form: FormGroup;
  loading = false;


  beverageTypes: any [] = [
    {id: 1, name: 'cafe'},
    {id: 2, name: 'thé'},
    {id: 3, name: 'chocolat'},
  ]
  max: 10;
  min: 0;
  step: 1;
  private model: UserBevarage;
  private data: any;



  constructor(private machineService: MachineService,
              private authService: AuthService,
              public fb: FormBuilder,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit() {

    this.data = this.route.snapshot.data.data;

    this.form = this.fb.group({
        'beverage': new FormControl(this.data.beverageType, [Validators.required]),
        'sugar': new FormControl(this.data.sugar),
        'mug': new FormControl(this.data.useOwnMug),
      },
    )


    /*this.form.setValue({
      'mug' : true,
      'beverage' : 1,
      'sugar' :40
    })*/
    this.authService.beverageChange.subscribe(p => {
      this.model = p;



    })
  }

  onMakeCoffee(f: FormGroup) {
    this.loading = true
     let userBevarage = new UserBevarage();
     userBevarage.sugar = f.value.sugar;
     userBevarage.useOwnMug = f.value.mug;
     userBevarage.beverageType = f.value.beverage;

    this.machineService.beverageServed(userBevarage).subscribe(response => {
      this.loading = false
    })
  }


}

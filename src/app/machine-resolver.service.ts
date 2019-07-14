import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import {Observable} from "rxjs";
import {UserBevarage} from "./the-machine/userBevarage";
import {AuthService} from "./auth/auth.service";
import {MachineService} from "./the-machine/machine.service";

@Injectable()
export class BeverageResolver implements Resolve<Observable<UserBevarage>> {
  constructor(private machineService: MachineService) {}

  resolve() {
    return this.machineService.getLastSelection();
  }
}

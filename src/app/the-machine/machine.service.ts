import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {UIService} from "../shared/ui.service";
import {Camp} from "../Camp/camp";
import {UserBevarage} from "./userBevarage";
import {Observable} from "rxjs";

const BACKEND_URL = environment.apiUrl;


@Injectable()
export class MachineService {

  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private uiService: UIService) {

  }

  beverageServed(userBevarage: UserBevarage) {

    return this.http
      .post<UserBevarage>(BACKEND_URL + "/machine", userBevarage)
  }

  getLastSelection(): Observable<UserBevarage> {
    return this.http
      .get<UserBevarage>(BACKEND_URL + "/machine")
  }
}

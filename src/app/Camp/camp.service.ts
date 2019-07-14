import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs"
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/auth.service";
import {Camp} from "./camp";
import {Router} from "@angular/router";
import {UIService} from "../shared/ui.service";

const BACKEND_URL = environment.apiUrl;


@Injectable()
export class CampService {

  private campChanged = new Subject<Camp[]>();
  private camps: Camp[];

  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private uiService: UIService) {

  }

  getCamps() {
    return this.http.get(BACKEND_URL + "/v1/camps")
      .subscribe((camps: Camp[]) => {
      this.camps = camps;
      this.campChanged.next([...this.camps]);
    });
  }

  getCampsUpdateListener() {
    return this.campChanged.asObservable();
  }

  addCamp(camp: Camp) {

    this.http
      .post<Camp>(BACKEND_URL + "/v1/camps", camp)
      .subscribe(responseData => {
        this.camps.push(responseData)
        this.campChanged.next([...this.camps]);

      }, error1 => {
        this.campChanged.next([...this.camps]);
        this.uiService.showSnackbar(error1.error, null, 3000)
      });

  }
}

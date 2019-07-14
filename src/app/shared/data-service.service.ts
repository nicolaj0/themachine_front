import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs"
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
const BACKEND_URL = environment.apiUrl;


@Injectable()
export class DataService {

  constructor(private http: HttpClient,private auth:AuthService) {

  }

  public getCamps(){
    return this.http.get(BACKEND_URL + "/v1/camps", {
      headers: new HttpHeaders({ "Authorization": "Bearer " + this.auth.token })
    })

  }


}

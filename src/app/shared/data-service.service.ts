import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs"
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
const BACKEND_URL = environment.apiUrl;


@Injectable()
export class DataService {

  constructor(private http: HttpClient, private router: Router) {

  }

  private token: string = "";
  private tokenExpiration: Date = new Date();


  public get loginRequired(): boolean {
    return this.token.length == 0 || this.tokenExpiration > new Date();
  }

  public login(creds) {
    return this.http.post(BACKEND_URL + "/account/createToken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
          this.token = tokenInfo.token;
          this.tokenExpiration = tokenInfo.expiration;
          return true;
        }));
  }


  public logout(){
    this.token = null;

  }

  public isAuthenticated(): boolean{
    return this.token !== null;
  }

  public getCamps(){
    return this.http.get(BACKEND_URL + "/v1/camps", {
      headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
    })

  }


}

import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();
  token: any;
  private tokenExpiration: number;

  constructor(private http: HttpClient, private router: Router) {

  }


  public logout(){
    this.token = null;
    this.authChange.next(false)
    this.router.navigate(['/signin']);
  }


  public login(creds) {
    return this.http.post(BACKEND_URL + "/account/createToken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
          this.token = tokenInfo.token;
          this.tokenExpiration = tokenInfo.expiration;
          this.authChange.next(true)
          this.router.navigate(['/camp'])

        }));
  }

  isAuth() :boolean {
    return this.token != null;
  }
}

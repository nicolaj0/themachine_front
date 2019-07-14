import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import * as  moment from "moment";

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
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public login(creds) {
    return this.http.post(BACKEND_URL + "/account/createToken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
          this.token = tokenInfo.token;
          this.tokenExpiration = tokenInfo.expiration;
          this.authChange.next(true)
          this.setSession(response);
          this.router.navigate(['/camp'])

        }));
  }

  public isAuth() {
    console.log(moment())
    let b = moment().isBefore(this.getExpiration());
    if (b){
      this.authChange.next(true)
    }
    else{
      this.authChange.next(false)
    }
    return b;
  }

  isLoggedOut() {
    return !this.isAuth();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    console.log(expiresAt)
    return moment(expiresAt);
  }





  private setSession(authResult) {
    const expiresAt = new Date(authResult.expiration);

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }
}

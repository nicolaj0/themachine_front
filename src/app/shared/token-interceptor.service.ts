import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(public auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token");

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }

/*

    if (!this.auth.token) return next.handle(request);

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.token}`
      }
    });
    return next.handle(request);*/
  }
}

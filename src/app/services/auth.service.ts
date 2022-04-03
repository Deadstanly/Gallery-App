import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/IUser";
import {Observable} from "rxjs";
import {IAuth} from "../models/IAuth";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: IUser): Observable<IAuth>{
    return this.http.post<IAuth>(`${environment.authUrl}${environment.apiKey}`, user);
  }

  public registration(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.authUrl}${environment.apiKey}`, user);
  }

}

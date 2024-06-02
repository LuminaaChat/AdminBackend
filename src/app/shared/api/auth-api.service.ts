import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../types/user.type";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  baseUrl = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {
    this.baseUrl += `/auth`;
  }

  login(email: string, password: string): Observable<{user: User, token: string}> {
    return this.httpClient.post<{user: User, token: string}>(`${this.baseUrl}/login`, {email: email, password: password});
  }

  register(email: string, password: string, firstName: string, lastName: string, roles: string[]): Observable<{user: User, token: string}> {
    return this.httpClient.post<{user: User, token: string}>(`${this.baseUrl}/register`, {email: email, password: password, firstName: firstName, lastName: lastName, roles: roles});
  }

  refreshToken(): Observable<{user: User, token: string}> {
    return this.httpClient.get<{user: User, token: string}>(`${this.baseUrl}/refresh`);
  }
}

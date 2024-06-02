import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  baseUrl = `${environment.baseUrl}`;

  constructor(private httpClient: HttpClient) {
    this.baseUrl += `/users`;
    console.log(this.baseUrl);
  }

  getList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  create(entity: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}`, entity);
  }

  update(id: string, entity: User): Observable<User> {
    return this.httpClient.patch<User>(`${this.baseUrl}/${id}`, entity);
  }

  delete(id: string): Observable<User> {
    return this.httpClient.delete<User>(`${this.baseUrl}/${id}`);
  }
}

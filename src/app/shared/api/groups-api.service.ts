import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../types/group.type";

@Injectable({
  providedIn: 'root'
})
export class GroupsApiService {

  baseUrl = `${environment.baseUrl}`;

  constructor(private httpClient: HttpClient) {
    this.baseUrl += `/groups`;
  }

  getList(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.baseUrl}`);
  }

  getById(id: string): Observable<Group> {
    return this.httpClient.get<Group>(`${this.baseUrl}/${id}`);
  }

  create(entity: Group): Observable<Group> {
    return this.httpClient.post<Group>(`${this.baseUrl}`, entity);
  }

  update(id: string, entity: Group): Observable<Group> {
    return this.httpClient.patch<Group>(`${this.baseUrl}/${id}`, entity);
  }

  delete(id: string): Observable<Group> {
    return this.httpClient.delete<Group>(`${this.baseUrl}/${id}`);
  }
}

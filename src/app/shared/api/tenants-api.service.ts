import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tenant} from "../types/tenant.type";

@Injectable({
  providedIn: 'root'
})
export class TenantsApiService {

  baseUrl = `${environment.baseUrl}`;

  constructor(private httpClient: HttpClient) {
    this.baseUrl += `/tenants`;
  }

  getList(): Observable<Tenant[]> {
    return this.httpClient.get<Tenant[]>(`${this.baseUrl}`);
  }

  getById(id: string): Observable<Tenant> {
    return this.httpClient.get<Tenant>(`${this.baseUrl}/${id}`);
  }

  create(entity: Tenant): Observable<Tenant> {
    return this.httpClient.post<Tenant>(`${this.baseUrl}`, entity);
  }

  update(id: string, entity: Tenant): Observable<Tenant> {
    return this.httpClient.patch<Tenant>(`${this.baseUrl}/${id}`, entity);
  }

  delete(id: string): Observable<Tenant> {
    return this.httpClient.delete<Tenant>(`${this.baseUrl}/${id}`);
  }
}

import { Employee } from './interface/employee';
import { Addresse } from './interface/addresse';
import { HttpClient } from '@angular/common/http';
import { Company } from './interface/company';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {
  private urlRoot = 'https://delphi.htl-leonding.ac.at:8181/apex/syp_untan_032021/company';

  constructor(private httpClient: HttpClient) {
  }

  loadCompany(): Promise<Company[]> {
    return this.httpClient.get<Company[]>(`${this.urlRoot}/firma?page=1`).toPromise();
  }

  loadAddresse(): Promise<Addresse[]> {
    return this.httpClient.get<Addresse[]>(`${this.urlRoot}/adresse/?page=1`).toPromise();
  }

  loadEmployee(): Promise<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.urlRoot}/mitarbeiter/?page=1`).toPromise();
  }
}

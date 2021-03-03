import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from './../interfaces/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {
  private urlRoot = 'https://delphi.htl-leonding.ac.at:8181/apex/syp_untan_032021/untan/company';

  constructor(private httpClient: HttpClient) {
  }

  loadCompany(firmaid: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.urlRoot}/${firmaid}`);
  }
}

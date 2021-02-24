import { Component, OnInit } from '@angular/core';

import { ComparisonService } from '../../services/comparison.service';

import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  firmaid: number = 1;
  company2: Company;

//  allCompanies: Array<Company>;
//  allEmployees: Array<Employee>;
//  allAddresses: Array<Addresse>;

  constructor(private comparisonService: ComparisonService) {
  }

  ngOnInit() {
    this.laodCompany2();
    console.log(this.company2)
//    this.loadCompanies(1);
  }
/*
  async loadCompanies(firmaid: number) {
    await this.comparisonService.loadCompany(firmaid);
  }
*/
  laodCompany2(): any {
    this.comparisonService.loadCompany(2)
    .subscribe(
      result => {
        return this.company2 = result;
      }
    )
  }

/*
  iterateOverAdr() {
    this.company.forEach(element => {
      return element;
    });
  }

  onFetchPosts() {
    this.fetchAddresse();
  }

  getKeys(obj){
    return Object.keys(obj)
  }

  private fetchAddresse() {
    this.http
    .get<{ [key: string]: Company}>('https://delphi.htl-leonding.ac.at:8181/apex/syp_untan_032021/company/firma')
    .pipe(
      map(responseData => {
      const companyArray:  Company[] = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          companyArray.push({ ...responseData[key], firmaid: key});
        }
      }
      return companyArray;
    })
    )
    .subscribe( posts => {
      console.log(posts);
      this.company = posts;
    });
  }
  */
}
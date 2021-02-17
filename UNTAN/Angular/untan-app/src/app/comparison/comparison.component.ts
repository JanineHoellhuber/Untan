import { HttpClient } from '@angular/common/http';
import { ComparisonService } from './../comparison.service';
import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../interface/company';
import { Employee } from '../interface/employee';
import { Addresse } from '../interface/addresse';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  id: number = 1;

  company: Company[] = [];

  allCompanys: Array<Company>;
  allEmployees: Array<Employee>;
  allAddresses: Array<Addresse>;

  constructor(private comparisonService: ComparisonService,
              private http: HttpClient) {
    }

  ngOnInit() {
    this.fetchAddresse();
  }

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
/*
  async loadCompanys() {
    this.allCompanys = await this.comparisonService.loadCompany();
  }

  async loadEmployees() {
    this.allEmployees = await this.comparisonService.loadEmployee();
  }

  async loadAddresses() {
    //this.addresse = await this.comparisonService.loadAddresse();
  }
  */
}
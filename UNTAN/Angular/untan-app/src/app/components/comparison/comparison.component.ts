import { Component, OnInit } from '@angular/core';

import { ComparisonService } from '../../services/comparison.service';

import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  selected1: Company[] = [];
  selected2: Company[] = [];
  selected3: Company[] = [];
  selected4: Company[] = [];
  selected5: Company[] = [];
  selected6: Company[] = [];
  selected7: Company[] = [];
  selected8: Company[] = [];
  selected9: Company[] = [];
  selected10: Company[] = [];
  companies: Company[] = [];
  company1: Company;
  company2: Company;
  company3: Company;
  company4: Company;
  company5: Company;
  company6: Company;
  company7: Company;
  company8: Company;
  company9: Company;
  company10: Company;

  constructor(private comparisonService: ComparisonService) {
  }

  ngOnInit() {
    this.loadCompany1();
    this.loadCompany2();
    this.loadCompany3();
    this.loadCompany4();
    this.loadCompany5();
    this.loadCompany6();
    this.loadCompany7();
    this.loadCompany8();
    this.loadCompany9();
    this.loadCompany10();
  }

  loadCompany1(): any {
    this.comparisonService.loadCompany(1)
    .subscribe(
      result => {
        this.companies.push(result);
        console.log(this.companies)
        return this.company1 = result;
      }
    )
  }

  loadCompany2(): any {
    this.comparisonService.loadCompany(2)
    .subscribe(
      result => {
        this.companies.push(result);
        return this.company2 = result;
      }
    )
  }

  loadCompany3(): any {
    this.comparisonService.loadCompany(3)
    .subscribe(
      result => {
        this.companies.push(result);
        return this.company3 = result;
      }
    )
  }

  loadCompany4(): any {
    this.comparisonService.loadCompany(4)
    .subscribe(
      result => {
        this.companies.push(result);
        console.log(this.companies)
        return this.company4 = result;
      }
    )
  }

  loadCompany5(): any {
    this.comparisonService.loadCompany(5)
    .subscribe(
      result => {
        this.companies.push(result);
        return this.company5 = result;
      }
    )
  }

  loadCompany6(): any {
    this.comparisonService.loadCompany(6)
    .subscribe(
      result => {
        this.companies.push(result);
        return this.company6 = result;
      }
    )
  }

  loadCompany7(): any {
    this.comparisonService.loadCompany(7)
    .subscribe(
      result => {
        this.companies.push(result);
        console.log(this.companies)
        return this.company7 = result;
      }
    )
  }

  loadCompany8(): any {
    this.comparisonService.loadCompany(8)
    .subscribe(
      result => {
        this.companies.push(result);
        return this.company8 = result;
      }
    )
  }

  loadCompany9(): any {
    this.comparisonService.loadCompany(9)
    .subscribe(
      result => {
        this.companies.push(result);
        return this.company9 = result;
      }
    )
  }

  loadCompany10(): any {
    this.comparisonService.loadCompany(10)
    .subscribe(
      result => {
        this.companies.push(result);
        console.log(this.companies)
        return this.company10 = result;
      }
    )
  }
}
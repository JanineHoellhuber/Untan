import { Component, OnInit } from '@angular/core';

import { ComparisonService } from '../../services/comparison.service';

import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  company1: Company;
  company2: Company;
  company3: Company;

  constructor(private comparisonService: ComparisonService) {
  }

  ngOnInit() {
    this.laodCompany1();
    this.laodCompany2();
    this.laodCompany3();
  }

  
  laodCompany1(): any {
    this.comparisonService.loadCompany(1)
    .subscribe(
      result => {
        return this.company1 = result;
      }
    )
  }

  laodCompany2(): any {
    this.comparisonService.loadCompany(2)
    .subscribe(
      result => {
        return this.company2 = result;
      }
    )
  }

  laodCompany3(): any {
    this.comparisonService.loadCompany(3)
    .subscribe(
      result => {
        return this.company3 = result;
      }
    )
  }
}
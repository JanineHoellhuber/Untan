import { Component, OnInit } from '@angular/core';

import { ComparisonService } from '../../services/comparison.service';

import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  selected: Company[] = [];
  company1: Company;
  company2: Company;
  company3: Company;

  constructor(private comparisonService: ComparisonService) {
  }

  ngOnInit() {
    this.loadCompany1();
    this.loadCompany2();
    this.loadCompany3();
  }

  loadCompany1(): any {
    this.comparisonService.loadCompany(1)
    .subscribe(
      result => {
        return this.company1 = result;
      }
    )
  }

  loadCompany2(): any {
    this.comparisonService.loadCompany(2)
    .subscribe(
      result => {
        return this.company2 = result;
      }
    )
  }

  loadCompany3(): any {
    this.comparisonService.loadCompany(3)
    .subscribe(
      result => {
        return this.company3 = result;
      }
    )
  }
}
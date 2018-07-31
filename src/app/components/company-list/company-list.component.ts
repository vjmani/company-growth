import { Component, OnInit } from '@angular/core';


import { CompanyTrackerDataService } from './../../services/company-data/company-data.service';
import { CompanyData } from './../../models/company-data.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companyTrackerData: Array<CompanyData>;

  constructor(private companyDataService: CompanyTrackerDataService) {}

  ngOnInit() {
    this.companyDataService.getCompanyData().subscribe((res) => {
      if (res && res['companies']) {
        this.companyTrackerData = res['companies'];
      }
    });
  }

}

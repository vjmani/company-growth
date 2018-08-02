import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CompanyTrackerDataService } from './../../services/company-data/company-data.service';
import { CompanyData } from './../../models/company-data.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companyTrackerData: Array<CompanyData>;

  constructor(
    private companyDataService: CompanyTrackerDataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.companyDataService.getCompanyData().subscribe((res) => {
      if (res && res['companies']) {
        this.companyTrackerData = res['companies'];
      }
    });
  }

  public addNewCompany(): void {
    this.router.navigate(['/company', 'new']);
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

import { CompanyTrackerDataService } from './../../services/company-data/company-data.service';
import { CompanyData } from './../../models/company-data.model';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  public companyDetails: CompanyData;
  public companyDetailsDeleted: Boolean = false;

  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true
  };


  colors = [
    {
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    {
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private companyDataService: CompanyTrackerDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    const selectedCompanyName = this.route.snapshot.params['name'];
    this.companyDataService.getCompanyData().subscribe((res) => {
      if (res && res['companies']) {
        if (res && res['companies']) {
          const companyList = res['companies'];
          let selectedCompany: Array<CompanyData> = [];
          selectedCompany = companyList.filter((companyDetail) => {
            return companyDetail.name.toLowerCase() === selectedCompanyName.toLowerCase();
          });

          this.companyDetails = selectedCompany[0];
        }
      }
    });
  }

  public onChartClick(event): void {
    console.log(event);
  }

  public editCompanyDetails(companyDetails: CompanyData): void {
    this.router.navigate(['/company', 'edit', companyDetails.name]);
  }

  public deleteCompanyDetails(companyDetails: CompanyData): void {
    // TODO: Delete Integration with backend service
    this.companyDetailsDeleted = true;
  }

  public goBackToHome(): void {
    this.router.navigate(['/']);
  }

}

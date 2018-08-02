import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

import { CompanyTrackerDataService } from './../../services/company-data/company-data.service';
import { CompanyData } from './../../models/company-data.model';

@Component({
  selector: 'app-company-details-edit',
  templateUrl: './company-details-edit.component.html',
  styleUrls: ['./company-details-edit.component.css']
})
export class CompanyDetailsEditComponent implements OnInit {
  public companyDetails: CompanyData = {
    name: '',
    status: '',
    address: '',
    keyContacts: [],
    modeOfOperations: ''
  };

  public informationSaved: Boolean = false;

  public companyKeyContact = '';
  public mode: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyDataService: CompanyTrackerDataService,
  ) { }

  ngOnInit() {
    const selectedCompanyName = this.route.snapshot.params['name'];
    this.mode = this.route.snapshot.params['mode'];

    if (this.mode === 'edit') {
      this.companyDataService.getCompanyData().subscribe((res) => {
        if (res && res['companies']) {
          if (res && res['companies']) {
            const companyList = res['companies'];
            let selectedCompany: Array<CompanyData> = [];
            selectedCompany = companyList.filter((companyDetail) => {
              return companyDetail.name.toLowerCase() === selectedCompanyName.toLowerCase();
            });
            this.companyDetails = selectedCompany[0];

            this.companyKeyContact = this.companyDetails.keyContacts.toString();
          }
        }
      });
    }
  }


  public saveCompanyDetails(): void {
    // Company details will be saved using backend service
    // for now just consoling the updated value
    this.companyDetails.keyContacts.push(this.companyKeyContact);
    this.informationSaved = true;



    console.log('Company details updated / new: ' + JSON.stringify(this.companyDetails));
  }

  public goBackToHome(): void {
    this.router.navigate(['/']);
  }
}

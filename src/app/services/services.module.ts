/**
 * Services module
 */

import { NgModule } from '@angular/core';

import { CompanyTrackerDataService } from './company-data/company-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  providers: [
    CompanyTrackerDataService,
  ],
  imports: [
    HttpClientModule,
  ]
})
export class CompanyTrackerServicesModule {}

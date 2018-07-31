/**
 * Company Data Service
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CompanyData } from './../../models/company-data.model';

@Injectable()
export class CompanyTrackerDataService {
  constructor(private http: HttpClient) {}

  public getCompanyData(): Observable<Array<CompanyData>> {
    return this.http.get<Array<CompanyData>>('./assets/company-list.json');
  }
}

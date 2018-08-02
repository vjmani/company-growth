/**
 * Components Module
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { CompanyListComponent } from './company-list/company-list.component';
import { HeaderComponent } from './header/header.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyDetailsEditComponent } from './company-details-edit/company-details-edit.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    HeaderComponent,
    CompanyDetailsComponent,
    CompanyDetailsEditComponent,
  ],
  exports: [
    CompanyListComponent,
    HeaderComponent,
    CompanyDetailsComponent,
    CompanyDetailsEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [],
})
export class CompanyTrackerComponentsModule {  }

/**
 * Components Module
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    HeaderComponent,
  ],
  exports: [
    CompanyListComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class CompanyTrackerComponentsModule {  }

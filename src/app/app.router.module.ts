import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailsEditComponent } from './components/company-details-edit/company-details-edit.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'company-details/:name', component: CompanyDetailsComponent },
  { path: 'company/:mode/:name', component: CompanyDetailsEditComponent},
  { path: 'company/:mode', component: CompanyDetailsEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

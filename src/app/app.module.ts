import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { CompanyTrackerServicesModule } from './services/services.module';
import { CompanyTrackerComponentsModule } from './components/component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CompanyTrackerServicesModule,
    ChartsModule,
    CompanyTrackerComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

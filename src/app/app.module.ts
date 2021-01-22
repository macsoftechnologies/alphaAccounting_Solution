import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { SectorsComponent } from './sectors/sectors.component';
import { ContactComponent } from './contact/contact.component';
import { JobboardComponent } from './jobboard/jobboard.component';
import { AccountingComponent } from './accounting/accounting.component';
import { GstComponent } from './gst/gst.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { NgoComponent } from './ngo/ngo.component';
import { PayrollComponent } from './payroll/payroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    SectorsComponent,
    ContactComponent,
    JobboardComponent,
    AccountingComponent,
    GstComponent,
    LandingPageComponent,
    IncomeTaxComponent,
    NgoComponent,
    PayrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

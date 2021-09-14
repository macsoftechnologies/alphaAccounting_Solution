import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AnnualFillingsComponent } from "./annual-fillings/annual-fillings.component";
import { RocComplianceComponent } from "./roc-compliance/roc-compliance.component";
import { MaintainceOfMinutesComponent } from "./maintaince-of-minutes/maintaince-of-minutes.component";
import { AllotmentOfSharesComponent } from "./allotment-of-shares/allotment-of-shares.component";
import { ChangeRegisteredOfficeComponent } from "./change-registered-office/change-registered-office.component";
import { ChangeInDirectorsComponent } from "./change-in-directors/change-in-directors.component";
import { ChangeAuthorisedCapitalCompanyComponent } from "./change-authorised-capital-company/change-authorised-capital-company.component";
import { RocComplianceApplicationFormComponent } from "./roc-compliance-application-form/roc-compliance-application-form.component";
const routes: Routes = [
  { path: "RocCompliance", component: RocComplianceComponent },
  {
    path: "RocComplianceApplicationForm",
    component: RocComplianceApplicationFormComponent,
  },

  { path: "AnnualFillings", component: AnnualFillingsComponent },

  { path: "AllotmentOfShares", component: AllotmentOfSharesComponent },
  {
    path: "ChangeAuthorisedCapitalCompany",
    component: ChangeAuthorisedCapitalCompanyComponent,
  },
  {
    path: "ChangeInDirectors",
    component: ChangeInDirectorsComponent,
  },
  {
    path: "ChangeRegisteredOffice",
    component: ChangeRegisteredOfficeComponent,
  },
  {
    path: "MaintainceOfMinutes",
    component: MaintainceOfMinutesComponent,
  },
];
@NgModule({
  declarations: [
    AnnualFillingsComponent,
    RocComplianceComponent,
    MaintainceOfMinutesComponent,
    AllotmentOfSharesComponent,
    ChangeRegisteredOfficeComponent,
    ChangeInDirectorsComponent,
    ChangeAuthorisedCapitalCompanyComponent,
    RocComplianceApplicationFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CompliancesModule {}

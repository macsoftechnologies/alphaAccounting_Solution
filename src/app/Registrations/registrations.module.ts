import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TANApplicationComponent } from "./tan-application/tan-application.component";
import { TANRegistrationComponent } from "./tan-registration/tan-registration.component";
import { FSSAIApplicationComponent } from "./fssai-application/fssai-application.component";
import { FSSAIRegistrationComponent } from "./fssai-registration/fssai-registration.component";
import { DigitalSignatureCertificateComponent } from "./digital-signature-certificate/digital-signature-certificate.component";
import { ISOCertificationComponent } from "./iso-certification/iso-certification.component";
import { TradeLicenseComponent } from "./trade-license/trade-license.component";
import { ISORegistrationComponent } from "./iso-registration/iso-registration.component";
import { DigitalSignatureRegistrationComponent } from "./digital-signature-registration/digital-signature-registration.component";
import { ImportExportComponent } from "./import-export/import-export.component";
import { ImportExportRegistrationComponent } from "./import-export-registration/import-export-registration.component";
import { TradeMarkComponent } from "./trade-mark/trade-mark.component";
import { TradeMarkRegistrationComponent } from "./trade-mark-registration/trade-mark-registration.component";
import { PANApplicationComponent } from "./pan-application/pan-application.component";
import { SSIApplicationComponent } from "./ssi-application/ssi-application.component";
const routes: Routes = [
  {
    path: "TANApplication",
    component: TANApplicationComponent,
  },
  {
    path: "TANRegistration",
    component: TANRegistrationComponent,
  },
  {
    path: "FSSAIApplication",
    component: FSSAIApplicationComponent,
  },
  {
    path: "FSSAIRegistration",
    component: FSSAIRegistrationComponent,
  },
  {
    path: "DigitalSignatureCertificate",
    component: DigitalSignatureCertificateComponent,
  },
  {
    path: "DigitalSignatureRegistration",
    component: DigitalSignatureRegistrationComponent,
  },
  {
    path: "ISOCertification",
    component: ISOCertificationComponent,
  },
  {
    path: "ISORegistration",
    component: ISORegistrationComponent,
  },

  {
    path: "ImportExport",
    component: ImportExportComponent,
  },
  {
    path: "ImportExportRegistration",
    component: ImportExportRegistrationComponent,
  },
  {
    path: "TradeLicense",
    component: TradeLicenseComponent,
  },
  {
    path: "TradeMark",
    component: TradeMarkComponent,
  },
  {
    path: "TradeMarkRegistration",
    component: TradeMarkRegistrationComponent,
  },
  {
    path: "PANApplication",
    component: PANApplicationComponent,
  },
  {
    path: "SSIApplication",
    component: SSIApplicationComponent,
  },
];
@NgModule({
  declarations: [
    TANApplicationComponent,
    TANRegistrationComponent,
    FSSAIApplicationComponent,
    FSSAIRegistrationComponent,
    DigitalSignatureCertificateComponent,
    ISOCertificationComponent,
    TradeLicenseComponent,
    ISORegistrationComponent,
    DigitalSignatureRegistrationComponent,
    ImportExportComponent,
    ImportExportRegistrationComponent,
    TradeMarkComponent,
    PANApplicationComponent,
    SSIApplicationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class RegistrationsModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountingComponent } from "./accounting/accounting.component";
import { LoginComponent } from "./Auth/login/login.component";
import { RegisterComponent } from "./Auth/register/register.component";
import { GstComponent } from "./gst/gst.component";
import { IndianOwnershipModule } from "./indian-ownership/indian-ownership.module";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NgoComponent } from "./ngo/ngo.component";
import { PayrollComponent } from "./payroll/payroll.component";
// import { Registrations } from "./Registrations/registrations.module";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },

  {
    path: "gst",
    component: GstComponent,
  },

  {
    path: "ngo",
    component: NgoComponent,
  },

  {
    path: "payroll",
    component: PayrollComponent,
  },

  {
    path: "accounting",
    component: AccountingComponent,
  },

  {
    path: "IndianOwnership",
    loadChildren: () =>
      import("./indian-ownership/indian-ownership.module").then(
        (m) => m.IndianOwnershipModule
      ),
  },
  {
    path: "Registrations",
    loadChildren: () =>
      import("./Registrations/registrations.module").then(
        (m) => m.RegistrationsModule
      ),
  },
  {
    path: "IncomeTaxComplianes",
    loadChildren: () =>
      import("./income-tax-complianes/income-tax-complianes.module").then(
        (m) => m.IncomeTaxComplianesModule
      ),
  },
  {
    path: "Gst",
    loadChildren: () => import("./gst/gst.module").then((m) => m.GstModule),
  },
  {
    path: "Compliances",
    loadChildren: () =>
      import("./compliances/compliances.module").then(
        (m) => m.CompliancesModule
      ),
  },

  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

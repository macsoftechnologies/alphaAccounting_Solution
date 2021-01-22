import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { GstComponent } from './gst/gst.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgoComponent } from './ngo/ngo.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent,
  },

  {
    path: 'incometax',
    component: IncomeTaxComponent,
  },

  {
    path: 'gst',
    component: GstComponent,
  },

  {
    path: 'ngo',
    component: NgoComponent,
  },

  {
    path: 'payroll',
    component: PayrollComponent,
  },

  {
    path: 'accounting',
    component: AccountingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

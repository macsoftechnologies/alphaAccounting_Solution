import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { GstComponent } from './gst/gst.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { IndianOwnershipModule } from './indian-ownership/indian-ownership.module';
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
  }, 

  {
    path: 'IndianOwnership',
    loadChildren: () => import('./indian-ownership/indian-ownership.module').then(m => m.IndianOwnershipModule)
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

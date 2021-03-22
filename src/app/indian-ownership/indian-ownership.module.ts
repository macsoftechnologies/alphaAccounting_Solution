import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLimitedCompanyComponent } from './private-limited-company/private-limited-company.component';
import { PublicLimitedCompanyComponent } from './public-limited-company/public-limited-company.component';
import { LimitedLiabilityPartnershipComponent } from './limited-liability-partnership/limited-liability-partnership.component';
import { OnePersonCompanyComponent } from './one-person-company/one-person-company.component';
import { PartnershipFirmComponent } from './partnership-firm/partnership-firm.component';
import { SoleProprietorshipComponent } from './sole-proprietorship/sole-proprietorship.component';
import { Routes , RouterModule } from '@angular/router';
import { StartBusinessComponent } from './start-business/start-business.component';
import { NidhiCompanyComponent } from './nidhi-company/nidhi-company.component';
import { ProducerCompanyComponent } from './producer-company/producer-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivateLimitedRegistrationComponent } from './private-limited-registration/private-limited-registration.component';

const routes: Routes = [
  
  {
    path: '',
    component: StartBusinessComponent
  },

  {
    path: 'privatelimitedcompany',
    component: PrivateLimitedCompanyComponent
  },

  {
    path: 'publicLimitedCompany',
    component: PublicLimitedCompanyComponent
  },

  {
    path: 'LLP',
    component: LimitedLiabilityPartnershipComponent
  },

  {
    path: 'OnePersonCompany',
    component: OnePersonCompanyComponent
  },

  {
    path: 'PartnershipFirm',
    component: PartnershipFirmComponent
  },

  {
    path: 'SoleProprietorship',
    component: SoleProprietorshipComponent
  },
  {
    path: 'PrivateLimitedRegistration',
    component: PrivateLimitedRegistrationComponent
  }

]


@NgModule({
  declarations: [PrivateLimitedCompanyComponent, PublicLimitedCompanyComponent, LimitedLiabilityPartnershipComponent, OnePersonCompanyComponent, PartnershipFirmComponent, SoleProprietorshipComponent, NidhiCompanyComponent, ProducerCompanyComponent, PrivateLimitedRegistrationComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class IndianOwnershipModule { }

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
import { LimitedLiabiltyRegistrationComponent } from './limited-liabilty-registration/limited-liabilty-registration.component';
import { PartnershipRegistrationComponent } from './partnership-registration/partnership-registration.component';
import { OnePersonCompanyRegistrationComponent } from './one-person-company-registration/one-person-company-registration.component';
import { SoleProprietorshipRegistrationComponent } from './sole-proprietorship-registration/sole-proprietorship-registration.component';

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
  },
  {
    path:'LimitedLiabiltyRegistration', component: LimitedLiabiltyRegistrationComponent
  },
  {path:'PartnershipRegistration', component:PartnershipRegistrationComponent},
  
  {path:'OPCRegistration', component:OnePersonCompanyRegistrationComponent},
  
  {path:'SoleProprietorshipRegistration', component:SoleProprietorshipRegistrationComponent}

]


@NgModule({
  declarations: [PrivateLimitedCompanyComponent, PublicLimitedCompanyComponent, LimitedLiabilityPartnershipComponent, OnePersonCompanyComponent, PartnershipFirmComponent, SoleProprietorshipComponent, NidhiCompanyComponent, ProducerCompanyComponent, PrivateLimitedRegistrationComponent, LimitedLiabiltyRegistrationComponent, PartnershipRegistrationComponent, SoleProprietorshipRegistrationComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class IndianOwnershipModule { }

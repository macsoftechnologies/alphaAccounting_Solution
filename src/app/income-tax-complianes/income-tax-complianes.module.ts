import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTaxReturnFillingComponent } from './income-tax-return-filling/income-tax-return-filling.component';
import { IncomeTaxNoticeComponent } from './income-tax-notice/income-tax-notice.component';
import { BulkReturnFillingComponent } from './bulk-return-filling/bulk-return-filling.component';
import { TdsReturnFillingComponent } from './tds-return-filling/tds-return-filling.component';
import { RespondToTaxNoticeComponent } from './respond-to-tax-notice/respond-to-tax-notice.component';
import { AssesmentComponent } from './assesment/assesment.component';



@NgModule({
  declarations: [IncomeTaxReturnFillingComponent, IncomeTaxNoticeComponent, BulkReturnFillingComponent, TdsReturnFillingComponent, RespondToTaxNoticeComponent, AssesmentComponent],
  imports: [
    CommonModule
  ]
})
export class IncomeTaxComplianesModule { }

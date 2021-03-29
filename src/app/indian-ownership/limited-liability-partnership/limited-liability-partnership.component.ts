import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-limited-liability-partnership',
  templateUrl: './limited-liability-partnership.component.html',
  styleUrls: ['./limited-liability-partnership.component.scss']
})
export class LimitedLiabilityPartnershipComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  proceed(){
    this.router.navigateByUrl('/LimitedLiabiltyRegistration')
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partnership-firm',
  templateUrl: './partnership-firm.component.html',
  styleUrls: ['./partnership-firm.component.scss']
})
export class PartnershipFirmComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  proceed(){
    this.router.navigateByUrl('/PartnershipRegistration')
  }
}

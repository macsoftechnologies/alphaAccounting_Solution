import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-limited-company',
  templateUrl: './public-limited-company.component.html',
  styleUrls: ['./public-limited-company.component.scss']
})
export class PublicLimitedCompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  proceed(){
    this.router.navigateByUrl('/PublicLimitedRegistration')
  }
}

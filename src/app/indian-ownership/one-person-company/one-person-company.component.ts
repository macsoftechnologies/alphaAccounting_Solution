import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-person-company',
  templateUrl: './one-person-company.component.html',
  styleUrls: ['./one-person-company.component.scss']
})
export class OnePersonCompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  proceed(){
    this.router.navigateByUrl('/OPCRegistration')
  }
}

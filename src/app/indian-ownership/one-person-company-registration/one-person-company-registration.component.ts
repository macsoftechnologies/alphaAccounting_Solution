import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-person-company-registration',
  templateUrl: './one-person-company-registration.component.html',
  styleUrls: ['./one-person-company-registration.component.scss']
})
export class OnePersonCompanyRegistrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
}

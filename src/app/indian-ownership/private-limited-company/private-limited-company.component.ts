import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-private-limited-company',
  templateUrl: './private-limited-company.component.html',
  styleUrls: ['./private-limited-company.component.scss']
})
export class PrivateLimitedCompanyComponent implements OnInit {

  // public myform;

  constructor(private router:Router) { 

   
  }
  

  ngOnInit(): void {
    // this.myform = new FormGroup({
      
    //   fullname: new FormControl("", [
    //     Validators.required,
        
    //   ]),
      
    //   email: new FormControl("", [
    //     Validators.required,
    //     Validators.pattern("[^ @]*@[^ @]*")
    //   ]),
      
     
    // });
  }
  // onsubmit()
  // {
  //     console.log(this.myform.value)
  //   }

  proceed(){
    this.router.navigateByUrl('/PrivateLimitedRegistration')
  }

}

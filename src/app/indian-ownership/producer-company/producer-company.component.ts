import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-producer-company',
  templateUrl: './producer-company.component.html',
  styleUrls: ['./producer-company.component.scss']
})
export class ProducerCompanyComponent implements OnInit {
  type: any;
  public CompanyForm;
  public hasError = false;

  constructor(private router:Router) { 
    this.CompanyForm = new FormGroup({
      
      fullname: new FormControl("", [
        Validators.required,
        
      ]),
      
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      number:new FormControl("", [ Validators.required
    ]),
      
     
    });
   
  }
  

  ngOnInit(): void {
    
   
  }
  proceed() {

    if (this.CompanyForm.valid) {
      console.log('working');
      this.router.navigateByUrl('/ProducerCompanyRegistration')
    }

    else {
      this.hasError = true;
      console.log("not working")
    }

  }
}

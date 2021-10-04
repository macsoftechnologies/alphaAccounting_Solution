import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiServiceService } from "src/api-service/api-service.service";

@Component({
  selector: "app-private-limited-company",
  templateUrl: "./private-limited-company.component.html",
  styleUrls: ["./private-limited-company.component.scss"],
})
export class PrivateLimitedCompanyComponent implements OnInit {
  public CompanyForm;
  public hasError = false;

  constructor(private router: Router, private service: ApiServiceService) {}

  ngOnInit(): void {
    this.CompanyForm = new FormGroup({
      fullname: new FormControl("", [Validators.required]),

      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ]),
      number: new FormControl("", [Validators.required]),
    });
  }
  proceed() {
    console.log(this.CompanyForm);
  
    if(this.CompanyForm.valid) {
      let pvtCompanyDetails = {
        Name: this.CompanyForm.value.fullname,
        Email: this.CompanyForm.value.email,
        mobileNum: this.CompanyForm.value.number,
      //  Password: this.CompanyForm.value.password,
      }

      this.service.privateCompanyRegister(pvtCompanyDetails).subscribe( (resp) => {
        console.log(resp);
        if(resp.statusCode == 200 ) {
        
          console.log("Registered Successfull");
          this.router.navigateByUrl("/PrivateLimitedRegistration");
        
        }
        else {
          console.log("Enter Valid Details")
        }
      })
    }
  }


  }
    // if (this.CompanyForm.valid) {
    //   console.log("working");
    //   this.router.navigateByUrl("/PrivateLimitedRegistration");
    // } else {
    //   this.hasError = true;
    //   console.log("not working");
    // }

    // onsubmit()
    // {
    //     console.log(this.myform.value)
    //   }

    // proceed(){
    //   this.router.navigateByUrl('/PrivateLimitedRegistration')
    // }
  


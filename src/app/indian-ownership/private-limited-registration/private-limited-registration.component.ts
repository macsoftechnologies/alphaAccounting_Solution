import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiServiceService } from "src/api-service/api-service.service";
@Component({
  selector: "app-private-limited-registration",
  templateUrl: "./private-limited-registration.component.html",
  styleUrls: ["./private-limited-registration.component.scss"],
})
export class PrivateLimitedRegistrationComponent implements OnInit {
  type: any;
  public CompanyForm;
  public DirectorForm;
  public hasError = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ApiServiceService) {
   
    this.DirectorForm = new FormGroup({
      directorname: new FormControl("", [Validators.required]),
      file: new FormControl("", [Validators.required]),
      file1: new FormControl("", [Validators.required]),
      file2: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.CompanyForm = new FormGroup({
      namecompany: new FormControl("", [Validators.required]),
      listadd: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
    });
  }
  Next() {

    console.log(this.CompanyForm);
  
    if(this.CompanyForm.valid) {
      let companyInfo = {
        Name_of_the_company: this.CompanyForm.value.namecompany,
        alternatesPreference: this.CompanyForm.value.listadd,
        address: this.CompanyForm.value.address,
        state:this.CompanyForm.value.state,
        pincode:this.CompanyForm.value.Pincode
      
      }

      this.service.privateCompanyRegister(companyInfo).subscribe( (resp) => {
        console.log(resp);
        if(resp.statusCode == 200 ) {
        
          console.log("Registered Successfull");
          this.router.navigate(["pills-Director"], {
                  relativeTo: this.activatedRoute,
                });
        }
        else {
          console.log("Enter Valid Details")
        }
      })
    }
  }

  //   if (this.CompanyForm.valid) {
  //     console.log("working");
  //     this.router.navigate(["pills-Director"], {
  //       relativeTo: this.activatedRoute,
  //     });
  //   } else {
  //     this.hasError = true;
  //     console.log("not working");
  //   }
  
  directorsubmit() {
    if (this.DirectorForm.valid) {
      console.log("working");
      this.router.navigateByUrl("");
    } else {
      this.hasError = true;
      console.log("not working");
    }
  }
}

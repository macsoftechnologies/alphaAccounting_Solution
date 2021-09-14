import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-roc-compliance-application-form",
  templateUrl: "./roc-compliance-application-form.component.html",
  styleUrls: ["./roc-compliance-application-form.component.scss"],
})
export class RocComplianceApplicationFormComponent implements OnInit {
  type: any;
  checkboxVal: string = "";
  public CompanyForm;
  public DirectorForm;
  public hasError = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.CompanyForm = new FormGroup({
      namecompany: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ]),
      Applicant: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
      DirectorAddress: new FormControl("", [Validators.required]),
      Number: new FormControl("", [Validators.required]),
      Directorname: new FormControl("", [Validators.required]),
      Directorinterest: new FormControl("", [Validators.required]),
    });

    this.DirectorForm = new FormGroup({
      Number: new FormControl("", [Validators.required]),
      Applicant: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
      Date: new FormControl("", [Validators.required]),
      Name4thdirector: new FormControl("", [Validators.required]),
      Name5thdirector: new FormControl("", [Validators.required]),
      Contact1stdirector: new FormControl("", [Validators.required]),
      Contact2nddirector: new FormControl("", [Validators.required]),
      Contact3rddirector: new FormControl("", [Validators.required]),
      Contact4thdirector: new FormControl("", [Validators.required]),
      Contact5thdirector: new FormControl("", [Validators.required]),
      Address1stdirector: new FormControl("", [Validators.required]),
      Address2ndirector: new FormControl("", [Validators.required]),
      Address3rddirector: new FormControl("", [Validators.required]),
      Address4thdirector: new FormControl("", [Validators.required]),
      Address5thdirector: new FormControl("", [Validators.required]),
      Email1stdirector: new FormControl("", [Validators.required]),
      Email2ndirector: new FormControl("", [Validators.required]),
      Email3rddirector: new FormControl("", [Validators.required]),
      Email4thdirector: new FormControl("", [Validators.required]),
      Email5thdirector: new FormControl("", [Validators.required]),
      money: new FormControl("", [Validators.required]),
      Profit: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}
  Next() {
    if (this.CompanyForm.valid) {
      console.log("working");
      // this.router.navigate(['pills-Director'],{relativeTo:this.activatedRoute});
    } else {
      this.hasError = true;
      console.log("not working");
    }
  }
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

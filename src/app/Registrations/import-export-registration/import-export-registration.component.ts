import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-import-export-registration",
  templateUrl: "./import-export-registration.component.html",
  styleUrls: ["./import-export-registration.component.scss"],
})
export class ImportExportRegistrationComponent implements OnInit {
  type: any;
  checkboxVal: string = "";
  public CompanyForm;
  public DirectorForm;
  public hasError = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.CompanyForm = new FormGroup({
      fullname: new FormControl("", [Validators.required]),
      namecompany1: new FormControl("", [Validators.required]),
      Gender: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
      Number: new FormControl("", [Validators.required]),
    });

    this.DirectorForm = new FormGroup({
      Num: new FormControl("", [Validators.required]),
      Name1stdirector: new FormControl("", [Validators.required]),
      Name2nddirector: new FormControl("", [Validators.required]),
      Name3rddirector: new FormControl("", [Validators.required]),
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
  // mychange(val) {
  //   console.log(val);
  //   if (val === "accomodation") {
  //     this.checkboxVal = "accomodation";
  //   } else if (val === "construction") {
  //     this.checkboxVal = "construction";
  //   } else if (val === "consulting") {
  //     this.checkboxVal = "consulting";
  //   }
  //   console.log(this.checkboxVal);
  // }
}

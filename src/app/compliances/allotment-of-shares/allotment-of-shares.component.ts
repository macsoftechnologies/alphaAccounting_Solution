import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-allotment-of-shares",
  templateUrl: "./allotment-of-shares.component.html",
  styleUrls: ["./allotment-of-shares.component.scss"],
})
export class AllotmentOfSharesComponent implements OnInit {
  public CompanyForm;
  public hasError = false;

  constructor(private router: Router) {
    this.CompanyForm = new FormGroup({
      fullname: new FormControl("", [Validators.required]),
      // companyname: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ]),
      number: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}
  proceed() {
    if (this.CompanyForm.valid) {
      console.log("working");
      this.router.navigateByUrl("/TANRegistration");
    } else {
      this.hasError = true;
      console.log("not working");
    }
  }
}

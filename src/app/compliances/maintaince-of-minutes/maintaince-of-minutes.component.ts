import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-maintaince-of-minutes",
  templateUrl: "./maintaince-of-minutes.component.html",
  styleUrls: ["./maintaince-of-minutes.component.scss"],
})
export class MaintainceOfMinutesComponent implements OnInit {
  public CompanyForm;
  public hasError = false;

  constructor(private router: Router) {
    this.CompanyForm = new FormGroup({
      fullname: new FormControl("", [Validators.required]),
      companyname: new FormControl("", [Validators.required]),
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

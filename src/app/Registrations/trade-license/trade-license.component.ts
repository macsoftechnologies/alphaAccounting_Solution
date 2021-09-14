import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-trade-license",
  templateUrl: "./trade-license.component.html",
  styleUrls: ["./trade-license.component.scss"],
})
export class TradeLicenseComponent implements OnInit {
  public CompanyForm;
  public hasError = false;

  constructor(private router: Router) {
    this.CompanyForm = new FormGroup({
      fullname: new FormControl("", [Validators.required]),

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
      this.router.navigateByUrl("");
    } else {
      this.hasError = true;
      console.log("not working");
    }

    // onsubmit()
    // {
    //     console.log(this.myform.value)
    //   }

    // proceed(){
    //   this.router.navigateByUrl('/PrivateLimitedRegistration')
    // }
  }
}

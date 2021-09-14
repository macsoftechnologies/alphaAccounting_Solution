import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-tan-registration",
  templateUrl: "./tan-registration.component.html",
  styleUrls: ["./tan-registration.component.scss"],
})
export class TANRegistrationComponent implements OnInit {
  type: any;
  public CompanyForm;
  public DirectorForm;
  public hasError = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.CompanyForm = new FormGroup({
      namecompany: new FormControl("", [Validators.required]),
      namecompany1: new FormControl("", [Validators.required]),
      namecompany2: new FormControl("", [Validators.required]),
      // listadd: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
      // directorname: new FormControl("", [Validators.required]),
    });

    this.DirectorForm = new FormGroup({
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
      Pin1stdirector: new FormControl("", [Validators.required]),
      Pin2ndirector: new FormControl("", [Validators.required]),
      Pin3rddirector: new FormControl("", [Validators.required]),
      Pin4thdirector: new FormControl("", [Validators.required]),
      Pin5thdirector: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}
  Next() {
    if (this.CompanyForm.valid) {
      console.log("working");
      this.router.navigate(["pills-Director"], {
        relativeTo: this.activatedRoute,
      });
    } else {
      this.hasError = true;
      console.log("not working");
    }
  }
  directorsubmit() {
    if (this.DirectorForm.valid) {
      console.log("working");
      // this.router.navigateByUrl("");
    } else {
      this.hasError = true;
      console.log("not working");
    }
  }
}

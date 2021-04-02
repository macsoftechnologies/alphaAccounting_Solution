import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-partnership-registration',
  templateUrl: './partnership-registration.component.html',
  styleUrls: ['./partnership-registration.component.scss']
})
export class PartnershipRegistrationComponent implements OnInit {

  public FirmForm;
  public PartnerForm;
  public hasError = false;

  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
    this.FirmForm = new FormGroup({
      namecompany: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
       Pincode: new FormControl("", [Validators.required]),
     
    });

    this.PartnerForm = new FormGroup({
      partnername: new FormControl("", [Validators.required]),
      file: new FormControl("", [Validators.required]),
      file1: new FormControl("", [Validators.required]),
      file2: new FormControl("", [Validators.required]),
      file3: new FormControl("", [Validators.required]),
      file4: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
     
    });
  }

  ngOnInit(): void {}
  Next() {
    if (this.FirmForm.valid) {
      console.log("working");
      this.router.navigate(['pills-Director'],{relativeTo:this.activatedRoute});
    } else {
      this.hasError = true;
      console.log("not working");
    }
  }
  partnersubmit(){
    if (this.PartnerForm.valid) {
      console.log("working");
      this.router.navigateByUrl("");
    } else {
      this.hasError = true;
      console.log("not working");
    }

  }
}

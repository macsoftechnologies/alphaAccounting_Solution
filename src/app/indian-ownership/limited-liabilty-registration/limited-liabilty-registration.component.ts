import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-limited-liabilty-registration',
  templateUrl: './limited-liabilty-registration.component.html',
  styleUrls: ['./limited-liabilty-registration.component.scss']
})
export class LimitedLiabiltyRegistrationComponent implements OnInit {

  public CompanyForm;
  public DirectorForm;
  public hasError = false;

  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
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
      partnername: new FormControl("", [Validators.required]),
      file: new FormControl("", [Validators.required]),
      file1: new FormControl("", [Validators.required]),
      file2: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required]),
     
    });
  }

  ngOnInit(): void {}
  Next() {
    if (this.CompanyForm.valid) {
      console.log("working");
      this.router.navigate(['pills-Director'],{relativeTo:this.activatedRoute});
    } else {
      this.hasError = true;
      console.log("not working");
    }
  }
  directorsubmit(){
    if (this.DirectorForm.valid) {
      console.log("working");
      this.router.navigateByUrl("");
    } else {
      this.hasError = true;
      console.log("not working");
    }

  }
}


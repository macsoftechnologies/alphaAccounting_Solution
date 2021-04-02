import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-producer-company-registration',
  templateUrl: './producer-company-registration.component.html',
  styleUrls: ['./producer-company-registration.component.scss']
})
export class ProducerCompanyRegistrationComponent implements OnInit {
// checkboxVal:string=""
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
    directorname: new FormControl("", [Validators.required]),
    file: new FormControl("", [Validators.required]),
    file1: new FormControl("", [Validators.required]),
    file2: new FormControl("", [Validators.required]),
    file3: new FormControl("", [Validators.required]),
    file4: new FormControl("", [Validators.required]),
    file5: new FormControl("", [Validators.required]),
    file6: new FormControl("", [Validators.required]),
    file7: new FormControl("", [Validators.required]),
    // address: new FormControl("", [Validators.required]),
    // Pincode: new FormControl("", [Validators.required]),
   
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






  // mychange(val){
  //   console.log(val);
  //   if(val === 'accomodation'){
  //     this.checkboxVal="accomodation"
  //   } else if(val === 'construction'){
  //     this.checkboxVal="construction"
  //   }
  //   console.log(this.checkboxVal);
    
  // }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-private-limited-registration',
  templateUrl: './private-limited-registration.component.html',
  styleUrls: ['./private-limited-registration.component.scss']
})
export class PrivateLimitedRegistrationComponent implements OnInit {
  companyform: FormGroup;

  constructor(private router:Router) {

    this.companyform = new FormGroup({      
      namecompany: new FormControl("", [
        Validators.required,
        
      ]),
    });
   }


  ngOnInit(): void {

  }
  accomodation(){
   
  }
// show1(){
//   document.getElementById('div1').style.display ='block';
//   document.getElementById('div2').style.display ='none';
// }
// show2(){
//   document.getElementById('div1').style.display = 'none';
//   document.getElementById('div2').style.display = 'block';
// }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/api-service/api-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   public hasError = false;
    LoginForm:FormGroup;
 
    constructor(private service: ApiServiceService) { }
   
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

 
  login() {
    console.log(this.LoginForm);
  
    if(this.LoginForm.valid) {
      let userLoginDetails = {
        details: this.LoginForm.value.email,
        Password: this.LoginForm.value.password
      }

      this.service.userLogin(userLoginDetails).subscribe( (resp) => {
        console.log(resp);
        if(resp.statusCode == 200 ) {
        
          console.log("Login Successfull");
        
        }
        else {
          console.log("Enter Valid Details")
        }
      })
    }
  }
}
  //   else {
  //     console.log("Enter Det");
  //   }
  // }

  // submitbtn() {

  //   if (this.LoginForm.valid) {
  //     console.log('working');
  //   }

  //   else {
  //     this.hasError = true;
  //     console.log("not working")
  //   }

  // }

  // get email() {
  //   return this.LoginForm.get('email');
  // }

  // get p() {
  //   return this.LoginForm.controls
  // }


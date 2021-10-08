import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/api-service/api-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   public hasError = false;
    LoginForm:FormGroup;
 
    constructor(private service: ApiServiceService, private router: Router) { }
   
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
          Swal.fire({
            icon: 'success',
            text: "USer successfully Logged in"
          })        
          this.router.navigateByUrl('');
        }
        else {
          console.log("Enter Valid Details")
        }
      })
    }
  }

  singup() {
    this.router.navigateByUrl('/register')
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


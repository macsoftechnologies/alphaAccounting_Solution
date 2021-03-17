import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hasError = false;

  constructor() { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl('', Validators.required)
  })

  submitbtn() {

    if (this.LoginForm.valid) {
      console.log('working');
    }

    else {
      this.hasError = true;
      console.log("not working")
    }

  }

  // get email() {
  //   return this.LoginForm.get('email');
  // }

  // get p() {
  //   return this.LoginForm.controls
  // }
}

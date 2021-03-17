import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hasError: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  registerBtn() {
    if(this.registerForm.valid) {

    }
    else {
      this.hasError = true;
    }
  }

}

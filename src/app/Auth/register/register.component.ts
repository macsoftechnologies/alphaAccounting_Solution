import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/api-service/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public hasError: boolean;
  registerForm:FormGroup
  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
  

 this.registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  }

  register(){
    console.log(this.registerForm);
  
    if(this.registerForm.valid) {
      let userRegisterDetails = {
        UserName: this.registerForm.value.name,
        Email: this.registerForm.value.email,
        MobileNum: this.registerForm.value.number,
        Password: this.registerForm.value.password,
      }

      this.service.userRegister(userRegisterDetails).subscribe( (resp) => {
        console.log(resp);
        if(resp.statusCode == 200 ) {
        
          console.log("Registered Successfull");
        
        }
        else {
          console.log("Enter Valid Details")
        }
      })
    }
  }
  }
  // registerBtn() {
  //   if(this.registerForm.valid) {

  //   }
  //   else {
  //     this.hasError = true;
  //   }
  // }



import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.css'
  ]
})
export class LoginFormComponent {

  constructor(private router:Router){}

  formLoginUser = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  });

  enviarform(){
    console.log(this.formLoginUser.value)
  }

  registroForm(){
    this.router.navigate(['/auth/signUp'])
  }

}

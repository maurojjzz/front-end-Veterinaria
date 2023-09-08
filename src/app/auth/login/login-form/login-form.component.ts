import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    '../../../app.component.css',
    './login-form.component.css'
  ]
})
export class LoginFormComponent {

  formLoginUser = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  });

  enviarform(){
    console.log(this.formLoginUser.value)
  }

}

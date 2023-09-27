import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.css'
  ]
})
export class LoginFormComponent {

  constructor(private router: Router, private service: AuthService) { }

  formLoginUser = new FormGroup({
    'email': new FormControl('', [
      Validators.required, 
      Validators.email]),
    'password': new FormControl('', [
      Validators.required, 
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)]),
  });

  get email() {
    return this.formLoginUser.get('email') as FormControl;
  }

  get password() {
    return this.formLoginUser.get('password') as FormControl;
  }

  enviarform() {
    console.log(this.formLoginUser.value)
    this.service.getAll();
    console.log('Aca te rediriguiria al correspondiente perfil')
  }

  registroForm() {
    this.router.navigate(['/auth/signUp'])
  }

}

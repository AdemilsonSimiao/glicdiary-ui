import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  msg: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  register(name: string, user: string, password: string, cpf: string){
    this.auth.register(name, user, password, cpf)
    .then(() => {
      this.router.navigate(['/measures']);
    })
    .catch(() => {
      this.msg = 'Usuário e/ou senha inválida!';
    })
  }

}

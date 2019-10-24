import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: "cmail-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private emailValidators = Validators.compose([Validators.required, Validators.email]);

  private senhaValidators = Validators.compose([Validators.required]);

  formLogin = new FormGroup({
    email: new FormControl("teste@cmail.com.br", this.emailValidators),
    senha: new FormControl("123", this.senhaValidators)
  });

  mensagemErro = "";

  constructor(private roteador: Router, 
              private service: LoginService) {}

  ngOnInit() {}

  handleLogin() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }
    
    // const loginDTO = {
    //   email: this.formLogin.get("email").value,
    //   password: this.formLogin.get("senha").value
    // };

    this.service
    .autenticar(this.formLogin.value)
    .subscribe(
      () => {
        this.roteador.navigate(['inbox']);
      },
      erro => {
        console.log(erro)
        this.mensagemErro = "Deu ruim, digite de novo"
      }
    );
    console.log(this.formLogin.value);
    this.formLogin.reset();
  }
}

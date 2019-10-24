import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  HttpClient,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { UserInputDTO } from "src/app/models/dto/user-input";
import { UserOutputDTO } from "src/app/models/dto/user-output";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "cmail-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"]
})
export class CadastroComponent implements OnInit {
  private nomeValidators = Validators.compose([
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(200),
    Validators.pattern("[a-zA-Z\u00C0-\u00FF ]+")
  ]);

  private usuarioValidators = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(40),
    Validators.pattern("[a-z0-9]+")
  ]);

  private senhaValidators = Validators.compose([
    Validators.required,
    Validators.minLength(6)
  ]);

  private telefoneValidators = Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(9),
    Validators.pattern(/^\d{8,9}$/)
  ]);

  formCadastro = new FormGroup({
    nome: new FormControl("", this.nomeValidators),
    usuario: new FormControl("", this.usuarioValidators),
    senha: new FormControl("", this.senhaValidators),
    avatar: new FormControl(
      "",
      Validators.required,
      this.validaImagem.bind(this)
    ),
    telefone: new FormControl("", this.telefoneValidators)
  });

  mensagem = "";

  constructor(
    private roteador: Router,
    private service: UserService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  validaImagem(control: FormControl) {
    const validationError = {
      urlInvalida: true
    };
    return this.http.head(control.value, { observe: "response" }).pipe(
      map(response => {
        if (response.ok) {
          return null;
        }
        //console.log(response);
        return validationError;
      }),
      catchError(() => {
        return [validationError];
      })
    );
    //const url = control.value;
    //console.log(control.value);
    //return new Promise((reject, resolve)=> resolve)
  }

  handleCadastro() {
    if (this.formCadastro.invalid) {
      this.formCadastro.markAllAsTouched();
      return;
    }

    // const user = new UserInputDTO(this.formCadastro.value);

    this.service.cadastrar(this.formCadastro.value).subscribe(
      response => {
        //console.log(response);
        // localStorage.setItem('cmail-token', response.token);
        // this.roteador.navigate(['users']);
        this.mensagem = `${response.email} feito com sucesso!`;
      },
      (erro: HttpErrorResponse) => {
        erro.error.body[0].message;
        this.mensagem = `${erro.error.body[0].message}`;
      }
    );
    console.log(this.formCadastro.value);
    //this.formCadastro.reset();
  }
}

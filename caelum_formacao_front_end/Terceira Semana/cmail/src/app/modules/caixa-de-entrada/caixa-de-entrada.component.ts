import { Component, OnInit } from "@angular/core";
import { Email } from "src/app/models/email";
import { NgForm } from "@angular/forms";

@Component({
  selector: "cmail-caixa-de-entrada",
  templateUrl: "./caixa-de-entrada.component.html",
  styleUrls: ["./caixa-de-entrada.component.scss"]
})
export class CaixaDeEntradaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  title = "cmail";

  listaEmails = [];

  private _isNewEmailFormOpen = false;

  email: Email = {
    destinatario: "",
    assunto: "",
    conteudo: ""
  };

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  getDestinatario(eventoInput) {
    this.email.destinatario = eventoInput.target.value;
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) {
      formEmail.control.markAllAsTouched();
      return;
    }

    let novoEmail: Email = {
      assunto: this.email.assunto,
      destinatario: this.email.destinatario,
      conteudo: this.email.conteudo
    };

    this.listaEmails.push(novoEmail);

    // let email = {
    //   destinatario: "",
    //   assunto: "",
    //   conteudo: ""
    // };

    // let email = new Email();
  }
}

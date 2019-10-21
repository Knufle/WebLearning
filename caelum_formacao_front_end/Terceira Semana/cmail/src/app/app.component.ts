import { Component } from "@angular/core";
import { Email } from "./models/email";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "cmail";

  listaEmails = [];

  private _isNewEmailFormOpen = false;

  email: Email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  getDestinatario(eventoInput) {


    this.email.destinatario = eventoInput.target.value;

  }

  handleNewEmail(evento: Event) {

    // let email = {
    //   destinatario: "",
    //   assunto: "",
    //   conteudo: ""
    // };

    // let email = new Email();
    evento.preventDefault();

    let novoEmail:Email = {
      assunto: this.email.assunto,
      destinatario: this.email.destinatario,
      conteudo: this.email.conteudo
    }

    this.listaEmails.push(novoEmail);
  }
}

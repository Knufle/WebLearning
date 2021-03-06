import { Component, OnInit } from "@angular/core";
import { EmailForm, Email } from "src/app/models/email";
import { NgForm } from "@angular/forms";
import { EmailService } from "src/app/services/email.service";
import { PageDataService } from "src/app/services/pagedata.service";

@Component({
  selector: "cmail-caixa-de-entrada",
  templateUrl: "./caixa-de-entrada.component.html",
  styleUrls: ["./caixa-de-entrada.component.scss"]
})
export class CaixaDeEntradaComponent implements OnInit {
  constructor(
    private servico: EmailService,
    private pageDataService: PageDataService
  ) {}

  ngOnInit() {
    this.servico.listar().subscribe(lista => {
      this.listaEmails = lista;
    });

    this.pageDataService.defineTitulo("Caixa de entrada - CMail");

    this.listarEmails();
  }

  // title = "cmail";

  listaEmails: Email[] = [];

  email: EmailForm = {
    destinatario: "",
    assunto: "",
    conteudo: ""
  };

  private _isNewEmailFormOpen = false;

  termoFiltro = "";

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  listarEmails() {
    this.servico.listar().subscribe((resposta: any[]) => {
      console.log(resposta);
      this.listaEmails = resposta;
    });
  }

  // getDestinatario(eventoInput) {
  //   this.email.destinatario = eventoInput.target.value;
  // }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) {
      formEmail.control.markAllAsTouched();
      return;
    }

    this.servico.enviar(this.email).subscribe(
      resposta => {
        console.log(resposta);

        this.listarEmails();

        this.email = {
          destinatario: "",
          assunto: "",
          conteudo: ""
        };

        formEmail.reset();
      },
      erro => console.log(erro)
    );

    // let novoEmail: Email = {
    //   assunto: this.email.assunto,
    //   destinatario: this.email.destinatario,
    //   conteudo: this.email.conteudo
    // };

    // let email = new Email();
  }

  apagarEmail(emailId: string) {
    if (confirm("Quer apagar mesmo?")) {
      this.servico.deletar(emailId).subscribe(
        () => {
          this.listarEmails();
        },
        erro => console.log(erro)
      );
    }
  }
  filtrarEmails() {
    //console.log(termoFiltro);
    return this.listaEmails.filter(email => {
      if (
        email.destinatario.toLowerCase().includes(this.termoFiltro.toLowerCase()) ||
        email.assunto.toLowerCase().includes(this.termoFiltro.toLowerCase()) ||
        email.conteudo.toLowerCase().includes(this.termoFiltro.toLowerCase())
      ) {
        return email;
      }
    });
  }
}

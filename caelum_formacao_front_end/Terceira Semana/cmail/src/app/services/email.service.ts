import { Injectable } from "@angular/core";
import { EmailForm, Email } from "../models/email";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class EmailService {
  private url = environment.apiURL + "emails/";

  private auth = {
    'Authorization': localStorage.getItem("cmail-token")
  };

  private cabecalho = {
    headers: new HttpHeaders(this.auth)
  };

  constructor(private http: HttpClient) {}

  enviar(dadosEmail: EmailForm) {
    const emailDTO = {
      to: dadosEmail.destinatario,
      subject: dadosEmail.assunto,
      content: dadosEmail.conteudo
    };

    return this.http.post(this.url, emailDTO, this.cabecalho);
  }

  listar(): Observable<Email[]>{
    return this.http
    .get<any[]>(this.url, this.cabecalho)
    .pipe(
      map((listaEmailIngles) => {
        return listaEmailIngles.map((emailIngles) => {
          return {
            destinatario: emailIngles.to,
            assunto: emailIngles.subject,
            conteudo: emailIngles.content,
            id: emailIngles.id,
            dataEnvio: emailIngles.created_at
          }
        })
      })
    );
  }

  deletar(id){
    return this.http.delete(this.url+id, this.cabecalho);
  }
}

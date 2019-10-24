import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserOutputDTO } from '../models/dto/user-output';
import { UserInputDTO } from '../models/dto/user-input';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private url = environment.apiURL + "users";

  constructor(private http: HttpClient) {}

  cadastrar(dadosCadastro): Observable<UserOutputDTO> {
    const userDTO = new UserInputDTO(dadosCadastro);
    return this.http.post<UserOutputDTO>(this.url,userDTO);
  }

//   cadastrar({ nome, usuario, telefone, avatar, senha }) {
//     const userDTO = {
//       name: nome,
//       username: usuario,
//       phone: telefone,
//       password: senha,
//       avatar: avatar
//     };

//     return this.http.post(this.url, userDTO).pipe(
//       map((resposta: any) => {
//         localStorage.setItem("cmail-token", resposta.token);
//         return "Cadastrado com sucesso ;D";
//       })
//     );
//   }
}

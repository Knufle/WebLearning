import { Component, Output, EventEmitter } from "@angular/core";
import { PageDataService } from "src/app/services/pagedata.service";

@Component({
  selector: "cmail-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss", "./header-search.scss"]
})
export class HeaderComponent {
  isMenuOpen = false;
  tituloDaPagina = "CMail";
  @Output() filtro = new EventEmitter<string>();

  constructor(private pageService: PageDataService) {
    this.pageService.titulo.subscribe(
      novoTitulo => (this.tituloDaPagina = novoTitulo)
    );
  }

  mostrarMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getTermoDeFiltro(evento) {
    //console.log(evento.target.value);
    this.filtro.emit(evento.target.value);
  }
}

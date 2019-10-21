import { Component } from "@angular/core";

@Component({
  selector: "cmail-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss", "./header-search.scss"]
})
export class HeaderComponent {
  isMenuOpen = false;

  mostrarMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

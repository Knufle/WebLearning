import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[cmailFormField]"
})
export class FormFieldDirective implements OnInit {
  constructor(private referenciaElemento: ElementRef) {
  }
  ngOnInit(){
    const elemento = this.referenciaElemento.nativeElement as HTMLInputElement;

    elemento.id = elemento.name;
    elemento.placeholder = " ";
    elemento.classList.add('mdl-textfield__input');
  }
}

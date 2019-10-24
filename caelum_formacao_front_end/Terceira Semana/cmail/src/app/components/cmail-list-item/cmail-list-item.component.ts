import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.scss']
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() conteudo = '';
  @Input() dataEnvio = '';
  @Input() idEmail = '';
  @Output() clicouNaLixeira = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  excluir(){
    console.log("clicou na lixeira");
    this.clicouNaLixeira.emit()
  }

}

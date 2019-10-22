import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() labelDoCampo = ""
  @Input() idCampo = ""
  @Input() validacao = false;

  constructor() { }

  ngOnInit() {
  }

}

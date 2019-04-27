import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-alert',
  template: '<div>This is an alert. {{message}}</div>',
  styles:[`
    div {
      border: 1px solid black;
      background: salmon;
      padding: 10px;
      font-family: sans-serif;
    }
  `]
})
export class AlertComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}

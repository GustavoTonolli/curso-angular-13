import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show;
  }
}

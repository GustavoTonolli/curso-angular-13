import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  myNumber: number = 3;

  constructor() { }

  ngOnInit(): void {
  }
  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10000000000000)
  }

}

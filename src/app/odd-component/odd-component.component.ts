import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-component',
  templateUrl: './odd-component.component.html',
  styleUrls: ['./odd-component.component.css']
})
export class OddComponentComponent implements OnInit {
  @Input('oddinput') oddElement!:number;
  constructor() { }

  ngOnInit(): void {
  }

}

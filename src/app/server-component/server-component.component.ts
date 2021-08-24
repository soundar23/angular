import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {
  @Input('srvElement')element!: { type: string; name: string; content: string; };
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-cockpit-component',
  templateUrl: './cockpit-component.component.html',
  styleUrls: ['./cockpit-component.component.css']
})
export class CockpitComponentComponent implements OnInit {
  @Output('sercreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName='';
  newServerContent='';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent})
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent})
  }
}

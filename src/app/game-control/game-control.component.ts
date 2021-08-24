import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('countEmitted') countEmitter = new EventEmitter<number>();
  count:number=0;
  intervalId:any;
  constructor() { }

  ngOnInit(): void {
  }
  startCounter() {
   this.intervalId = setInterval(()=>{
     console.log(this.count);
     this.count++;
     this.countEmitter.emit(this.count)},1000);
  }
  stopCounter() {
   clearInterval(this.intervalId)
  }
}

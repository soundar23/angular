import { Injectable } from '@angular/core';
import { CounterServiceService } from './counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class SwitchServiceService {
  activeUser=['soundar','aaaaaa'];
  inactiveUser=['abc','cccd'];
  constructor(private counterSevices:CounterServiceService) { }
  switchToInactive(id:number){
   this.inactiveUser.push(this.activeUser[id]);
   this.activeUser.splice(id,1);
   this.counterSevices.activeToInactive();
  }
  switchToActive(id:number){
    this.activeUser.push(this.inactiveUser[id]);
    this.inactiveUser.splice(id,1);
    this.counterSevices.inactiveToactive();
   }

}

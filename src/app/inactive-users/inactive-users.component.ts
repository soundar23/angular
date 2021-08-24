import { Component, OnChanges, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { SwitchServiceService } from '../switch-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
   inactiveuser:string[]=[];
   inactiveSwitchCount:number=0;
  constructor(private switchservice:SwitchServiceService,private counter:CounterServiceService) { }

  ngOnInit(): void {
    this.inactiveuser=this.switchservice.inactiveUser;
  }
 
  onSwitch(id:number){
    this.switchservice.switchToActive(id);
    this.inactiveSwitchCount = this.counter.inactiveCount;

  }
}

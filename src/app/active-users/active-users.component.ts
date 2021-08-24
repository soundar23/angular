import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { SwitchServiceService } from '../switch-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUser:string[]=[];
  activeUserCount=0;
  constructor(private switchServices:SwitchServiceService,private counterServices:CounterServiceService) { }

  ngOnInit(): void {
    this.activeUser=this.switchServices.activeUser;
  }
  onSwitch(id:number){
    this.switchServices.switchToInactive(id);
    this.activeUserCount = this.counterServices.activeCount;

  }
}

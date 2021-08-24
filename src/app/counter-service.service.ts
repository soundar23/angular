import { Injectable } from '@angular/core';

export class CounterServiceService {
  activeCount=0;
  inactiveCount=0;
  constructor() { }

  activeToInactive(){
  return this.activeCount++;
  console.log(this.activeCount);
  }

  inactiveToactive(){
    return this.inactiveCount++;
  console.log(this.inactiveCount);

  }
}

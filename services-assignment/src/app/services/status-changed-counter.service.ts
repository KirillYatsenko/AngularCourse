import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusChangedCounterService {

  private changeActiveCounter = 0;
  private changeInactiveCounter = 0;
  
  constructor() {
   }

  public changeToActive(): void{
    this.changeActiveCounter++;
    console.log(`Users status change to Active: ${this.changeActiveCounter}`);
  }

  public changeToInactive(): void{
    this.changeInactiveCounter++;
    console.log(`Users status change to Inactive: ${this.changeInactiveCounter}`);
  }


}

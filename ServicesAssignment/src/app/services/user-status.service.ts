import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];

  constructor() { }
}

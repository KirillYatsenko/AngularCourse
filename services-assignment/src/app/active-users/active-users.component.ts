import { StatusChangedCounterService } from './../services/status-changed-counter.service';
import { Component } from '@angular/core';
import { UserStatusService } from './../services/user-status.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  public users: string[];

  constructor(
    private userStatusService: UserStatusService,
    private statusChangedCounterService: StatusChangedCounterService
  ) {
    this.users = userStatusService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userStatusService.inactiveUsers.push(this.users[id]);
    this.users.splice(id, 1);

    this.statusChangedCounterService.changeToInactive();
  }
}
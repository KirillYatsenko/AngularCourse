import { Component } from '@angular/core';
import { UserStatusService } from '../services/user-status.service';
import { StatusChangedCounterService } from '../services/status-changed-counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  public users: string[];

  constructor(
    private userStatusService: UserStatusService,
    private statusChangedCounterService: StatusChangedCounterService
  ) {
    this.users = userStatusService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userStatusService.activeUsers.push(this.users[id]);
    this.users.splice(id, 1);

    this.statusChangedCounterService.changeToActive();
  }
}
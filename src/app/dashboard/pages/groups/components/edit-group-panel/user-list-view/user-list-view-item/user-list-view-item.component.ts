import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../../../../../shared/types/user.type";
import {DatePipe} from "@angular/common";
import {RolesArrayPipe} from "../../../../../../../shared/pipes/roles-array.pipe";

@Component({
  selector: 'app-user-list-view-item',
  standalone: true,
  imports: [
    DatePipe,
    RolesArrayPipe
  ],
  templateUrl: './user-list-view-item.component.html',
  styleUrl: './user-list-view-item.component.css'
})
export class UserListViewItemComponent {
  @Input() user: User = {} as User;
  @Output() moveUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() dropUser: EventEmitter<User> = new EventEmitter<User>();


  showOptions: boolean = false;

  constructor() {
  }

  onClickOptions() {
    this.showOptions = !this.showOptions;
  }

  onClickMoveUser(user: User) {
    this.showOptions = false;
    this.moveUser.emit(user);
  }

  onClickDropUser(user: User) {
    console.log('View Item: onClickDropUser: ', user);
    this.showOptions = false;
    this.dropUser.emit(user);
  }
}

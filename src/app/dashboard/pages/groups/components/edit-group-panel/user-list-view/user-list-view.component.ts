import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import {User} from "../../../../../../shared/types/user.type";
import {DatePipe} from "@angular/common";
import {RolesArrayPipe} from "../../../../../../shared/pipes/roles-array.pipe";
import {UserListViewItemComponent} from "./user-list-view-item/user-list-view-item.component";

@Component({
  selector: 'app-user-list-view',
  standalone: true,
  imports: [
    DatePipe,
    RolesArrayPipe,
    UserListViewItemComponent
  ],
  templateUrl: './user-list-view.component.html',
  styleUrl: './user-list-view.component.css'
})
export class UserListViewComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() users: User[] = [];
  @Output() moveUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() dropUser: EventEmitter<User[]> = new EventEmitter<User[]>();
  @Output() showAddUserPanel: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  onClickAddUser() {
    this.showAddUserPanel.emit(true);
  }

  onMoveUser(user: User) {
    this.moveUser.emit(user);
  }

  onDropUser(user: User) {
    console.log('View List: onClickDropUser: ', user);
    let users = this.users.filter(u => u._id !== user._id);
    console.log('View List: onClickDropUser: AFTER: ', users);
    this.dropUser.emit(users);
  }

}

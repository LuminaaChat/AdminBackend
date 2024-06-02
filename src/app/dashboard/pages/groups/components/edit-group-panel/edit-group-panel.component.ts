import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Group} from "../../../../../shared/types/group.type";
import {RolesArrayPipe} from "../../../../../shared/pipes/roles-array.pipe";
import {UserListViewComponent} from "./user-list-view/user-list-view.component";
import {User} from "../../../../../shared/types/user.type";
import {AddUserComponent} from "./add-user/add-user.component";

@Component({
  selector: 'app-edit-group-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RolesArrayPipe,
    DatePipe,
    UserListViewComponent,
    AddUserComponent
  ],
  templateUrl: './edit-group-panel.component.html',
  styleUrl: './edit-group-panel.component.css'
})
export class EditGroupPanelComponent {
  @Input() showEditGroupPanel: boolean = false;
  @Input() selectedGroup!: Group;
  @Input() error: WritableSignal<string | null> = signal<string | null>(null);
  @Output() closeEditGroupPanelEvent: EventEmitter<{group: Group | null, showPanel: boolean}> = new EventEmitter<{group: Group | null, showPanel: boolean}>()

  showAddUserToMembersPanel: boolean = false;
  showAddUserToOwnersPanel: boolean = false;

  constructor() {
  }

  onClickClose() {
    this.showEditGroupPanel = false;
    this.closeEditGroupPanelEvent.emit({group: null, showPanel: false});
  }

  onClickSave() {
    this.showEditGroupPanel = false;
    this.closeEditGroupPanelEvent.emit({group: this.selectedGroup, showPanel: false});
  }

  onShowAddUserToMembersPanel(show: boolean) {
    this.showAddUserToMembersPanel = show;
  }

  onShowAddUserToOwnersPanel(show: boolean) {
    this.showAddUserToOwnersPanel = show;
  }

  onClickCloseAddUserToMemberPanel(event: boolean) {
    this.showAddUserToMembersPanel = event;
  }

  onClickCloseAddUserToOwnersPanel(event: boolean) {
    this.showAddUserToOwnersPanel = event;
  }

  onMoveUser(user: User) {
    console.log('onMoveUser: ', user);
  }

  onDropUserFromOwners(users: User[]) {
    console.log('Panel Owners: onClickDropUser: ', users);
    //this.closeEditGroupPanelEvent.emit({group: this.selectedGroup, showPanel: true});
  }

  onDropUserFromMembers(users: User[]) {
    console.log('Panel Members: onClickDropUser: ', users);
    this.selectedGroup.members = users;
    this.closeEditGroupPanelEvent.emit({group: this.selectedGroup, showPanel: true});
  }
}

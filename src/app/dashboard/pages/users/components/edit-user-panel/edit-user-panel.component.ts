import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {User} from "../../../../../shared/types/user.type";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-user-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './edit-user-panel.component.html',
  styleUrl: './edit-user-panel.component.css'
})
export class EditUserPanelComponent {
  @Input() showEditUserPanel: boolean = false;
  @Input() selectedUser!: User;
  @Output() closeEditUserPanelEvent: EventEmitter<User | null> = new EventEmitter<User | null>()

  activeRoles = {
    employee: false,
    client: false,
    legalGuardian: false,
    admin: false,
  };

  constructor() {
  }

  resetActiveRoles() {
    this.activeRoles = {
      employee: false,
      client: false,
      legalGuardian: false,
      admin: false,
    }
  }

  onClickClose() {
    this.showEditUserPanel = false;
    this.closeEditUserPanelEvent.emit(null);
  }

  onCheckboxChange(event: any) {
    if (!event.target.checked) {
      this.selectedUser.roles = this.selectedUser.roles.filter((role) => {
        return role !== event.target.value;
      });
    } else {
      this.selectedUser.roles.push(event.target.value);
    }
  }

  checkboxHasRole(role: string): boolean {
    return this.selectedUser.roles.includes(role);
  }

  onClickSave() {
    this.showEditUserPanel = false;
    this.closeEditUserPanelEvent.emit(this.selectedUser);
  }
}

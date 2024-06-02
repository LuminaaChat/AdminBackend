import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {User} from "../../../../../shared/types/user.type";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-user-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './new-user-panel.component.html',
  styleUrl: './new-user-panel.component.css'
})
export class NewUserPanelComponent {
  @Input() showNewUserPanel: boolean = false;
  @Input() error: WritableSignal<string | null> = signal<string | null>(null);
  @Output() closeNewUserPanelEvent: EventEmitter<User | null> = new EventEmitter<User | null>()

  newUser: User = {} as User;

  activeRoles = {
    employee: false,
    client: false,
    legalGuardian: false,
    admin: false,
  };

  constructor() { }

  resetActiveRoles() {
    this.activeRoles = {
      employee: false,
      client: false,
      legalGuardian: false,
      admin: false,
    }
  }

  onClickClose() {
    this.resetActiveRoles();
    this.showNewUserPanel = false;
    this.closeNewUserPanelEvent.emit(null);
  }

  onClickSave() {
    this.newUser.roles = [];
    if (this.activeRoles.client)
      this.newUser.roles.push('CLIENT')
    if (this.activeRoles.employee)
      this.newUser.roles.push('EMPLOYEE')
    if (this.activeRoles.legalGuardian)
      this.newUser.roles.push('LEGALGUARDIAN')
    if (this.activeRoles.admin)
      this.newUser.roles.push('ADMIN')
    this.resetActiveRoles();
    this.showNewUserPanel = false;
    this.closeNewUserPanelEvent.emit(this.newUser);
  }
}

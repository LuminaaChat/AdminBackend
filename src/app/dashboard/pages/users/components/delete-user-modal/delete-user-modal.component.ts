import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {User} from "../../../../../shared/types/user.type";

@Component({
  selector: 'app-delete-user-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './delete-user-modal.component.html',
  styleUrl: './delete-user-modal.component.css'
})
export class DeleteUserModalComponent {
  @Input() showDeleteUserModal: boolean = false;
  @Input() selectedUser!: User;
  @Output() closeDeleteUserModal: EventEmitter<User | null> = new EventEmitter<User | null>();

  constructor() {
  }

  onClickClose() {
    this.showDeleteUserModal = false;
    this.closeDeleteUserModal.emit(null);
  }

  onClickDelete() {
    this.showDeleteUserModal = false;
    this.closeDeleteUserModal.emit(this.selectedUser);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {Group} from "../../../../../shared/types/group.type";

@Component({
  selector: 'app-delete-group-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './delete-group-modal.component.html',
  styleUrl: './delete-group-modal.component.css'
})
export class DeleteGroupModalComponent {
  @Input() showDeleteGroupModal: boolean = false;
  @Input() selectedGroup!: Group;
  @Output() closeDeleteGroupModal: EventEmitter<Group | null> = new EventEmitter<Group | null>();

  constructor() {
  }

  onClickClose() {
    this.showDeleteGroupModal = false;
    this.closeDeleteGroupModal.emit(null);
  }

  onClickDelete() {
    this.showDeleteGroupModal = false;
    this.closeDeleteGroupModal.emit(this.selectedGroup);
  }
}

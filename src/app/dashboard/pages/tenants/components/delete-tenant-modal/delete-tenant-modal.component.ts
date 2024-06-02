import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {Tenant} from "../../../../../shared/types/tenant.type";

@Component({
  selector: 'app-delete-tenant-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './delete-tenant-modal.component.html',
  styleUrl: './delete-tenant-modal.component.css'
})
export class DeleteTenantModalComponent {
  @Input() showDeleteTenantModal: boolean = false;
  @Input() selectedTenant!: Tenant;
  @Output() closeDeleteTenantModal: EventEmitter<Tenant | null> = new EventEmitter<Tenant | null>();

  constructor() {
  }

  onClickClose() {
    this.showDeleteTenantModal = false;
    this.closeDeleteTenantModal.emit(null);
  }

  onClickDelete() {
    this.showDeleteTenantModal = false;
    this.closeDeleteTenantModal.emit(this.selectedTenant);
  }
}

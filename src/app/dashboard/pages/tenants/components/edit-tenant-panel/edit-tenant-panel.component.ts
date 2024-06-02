import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import {NgIf} from "@angular/common";
import { Tenant } from '../../../../../shared/types/tenant.type';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-tenant-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './edit-tenant-panel.component.html',
  styleUrl: './edit-tenant-panel.component.css'
})
export class EditTenantPanelComponent {
  @Input() showEditTenantPanel: boolean = false;
  @Input() selectedTenant!: Tenant;
  @Input() error: WritableSignal<string | null> = signal<string | null>(null);
  @Output() closeEditTenantPanelEvent: EventEmitter<Tenant | null> = new EventEmitter<Tenant | null>()

  constructor() {
  }

  onClickClose() {
    this.showEditTenantPanel = false;
    this.closeEditTenantPanelEvent.emit(null);
  }

  onClickSave() {
    this.showEditTenantPanel = false;
    this.closeEditTenantPanelEvent.emit(this.selectedTenant);
  }
}

import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import {NgIf} from "@angular/common";
import {Tenant} from "../../../../../shared/types/tenant.type";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-tenant-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './new-tenant-panel.component.html',
  styleUrl: './new-tenant-panel.component.css'
})
export class NewTenantPanelComponent {
  @Input() showNewTenantPanel: boolean = false;
  @Input() error: WritableSignal<string | null> = signal<string | null>(null);
  @Output() closeNewTenantPanelEvent: EventEmitter<Tenant | null> = new EventEmitter<Tenant | null>()

  newDivision: Tenant = {} as Tenant;
  constructor() {
  }

  onClickClose() {
    this.showNewTenantPanel = false;
    this.closeNewTenantPanelEvent.emit(null);
  }

  onClickSave() {
    this.showNewTenantPanel = false;
    this.closeNewTenantPanelEvent.emit(this.newDivision);
  }
}

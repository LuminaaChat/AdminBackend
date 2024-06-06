import {Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {Tenant} from "../../../../../shared/types/tenant.type";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-tenant-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgClass
  ],
  templateUrl: './new-tenant-panel.component.html',
  styleUrl: './new-tenant-panel.component.css'
})
export class NewTenantPanelComponent implements OnInit {
  @Input() showNewTenantPanel: boolean = false;
  @Input() error: WritableSignal<string | null> = signal<string | null>(null);
  @Output() closeNewTenantPanelEvent: EventEmitter<Tenant | null> = new EventEmitter<Tenant | null>()
  newTenant: Tenant = {
    icon: 'house',
    minRole: 'employee',
    visible: true,
    color: '#000000'
  } as Tenant;
  constructor() {
  }

  private resetTenant(): void {
    this.newTenant = {
      icon: 'house',
      minRole: 'employee',
      visible: true,
      color: '#000000'
    } as Tenant;
  }

  onClickClose() {
    this.showNewTenantPanel = false;
    this.closeNewTenantPanelEvent.emit(null);
    this.resetTenant();
  }

  onClickSave() {
    this.showNewTenantPanel = false;
    this.closeNewTenantPanelEvent.emit(this.newTenant);
    this.resetTenant();
  }

  ngOnInit(): void {
    this.resetTenant();
  }
}

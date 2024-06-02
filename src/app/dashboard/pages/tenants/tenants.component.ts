import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {NgIf} from "@angular/common";
import {Tenant} from "../../../shared/types/tenant.type";
import {VisiblePipe} from "../../../shared/pipes/visible.pipe";
import {RolePipe} from "../../../shared/pipes/role.pipe";
import {NewTenantPanelComponent} from "./components/new-tenant-panel/new-tenant-panel.component";
import {EditTenantPanelComponent} from "./components/edit-tenant-panel/edit-tenant-panel.component";
import {DeleteTenantModalComponent} from "./components/delete-tenant-modal/delete-tenant-modal.component";
import {PaginationComponent} from "../../../shared/components/pagination/pagination.component";
import {TenantsApiService} from "../../../shared/api/tenants-api.service";
import {Notification} from "../../../shared/types/notification.type";
import {NotificationsService} from "../../../shared/services/notifications.service";
import {User} from "../../../shared/types/user.type";

@Component({
  selector: 'app-tenants',
  standalone: true,
  imports: [
    NgIf,
    NewTenantPanelComponent,
    EditTenantPanelComponent,
    DeleteTenantModalComponent,
    VisiblePipe,
    RolePipe,
    PaginationComponent
  ],
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.css'
})
export class TenantsComponent implements OnInit {
  showNewTenantPanel: boolean = false;
  showEditTenantPanel: boolean = false;
  showDeleteTenantModal: boolean = false;

  tenants: WritableSignal<Tenant[]> = signal<Tenant[]>([]);
  selectedTenant: WritableSignal<Tenant> = signal<Tenant>({} as Tenant);

  constructor(private tenantsApi: TenantsApiService,
              private notify: NotificationsService,) {
  }

  onClickCloseNewTenantPanel(event: Tenant | null) {
    if (event)
      this.tenantsApi.create( event as Tenant ).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Bereich angelegt!',
            message: `${event.name} wurde erfolgreich angelegt.`,
            type: 'success'
          } as Notification)
          this.getFromApi();
        },
        error: (error) => {
          this.notify.newNotification({
            title: 'Fehler!',
            message: error.error.message,
            type: 'error'
          } as Notification)
        }
      });
    this.showNewTenantPanel = false;
  }

  onClickCloseEditTenantPanel(event: Tenant | null) {
    if (event)
      this.tenantsApi.update(event._id, event).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Bearbeitet!',
            message: `Der Bereich ${event.name} wurde erfolgreich bearbeitet.`,
            type: 'success'
          } as Notification)
          this.getFromApi();
        },
        error: (error) => {
          this.notify.newNotification({
            title: 'Fehler!',
            message: error.error.message,
            type: 'error'
          } as Notification)
        }
      });
    this.selectedTenant.set({} as Tenant);
    this.showEditTenantPanel = false;
  }

  onClickCloseDeleteTenantModal(event: Tenant | null) {
    if (event)
      this.tenantsApi.delete(event._id).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Gelöscht!',
            message: `Bereich (${event.name} wurde erfolgreich gelöscht.`,
            type: 'success'
          } as Notification)
          this.getFromApi();
        },
        error: (error) => {
          this.notify.newNotification({
            title: 'Fehler!',
            message: error.error.message,
            type: 'error',
            timer: 6000
          } as Notification)
        }
      });
    this.selectedTenant.set({} as Tenant);
    this.showDeleteTenantModal = false;
  }

  onClickAddTenant() {
    this.showNewTenantPanel = true;
  }

  onClickEditTenant(tenant: Tenant) {
    this.selectedTenant.set(tenant);
    this.showEditTenantPanel = true;
  }

  onClickDeleteTenant(tenant: Tenant) {
    this.selectedTenant.set(tenant);
    this.showDeleteTenantModal = true;
  }

  getFromApi() {
    this.tenantsApi.getList().subscribe({
      next: (data: Tenant[]) => {
        this.tenants.set(data);
      },
      error: (error) => {
        this.notify.newNotification({
          title: 'Fehler!',
          message: error.error.message,
          type: 'error'
        } as Notification)
      }
    });
  }

  ngOnInit(): void {
    this.getFromApi();
  }
}

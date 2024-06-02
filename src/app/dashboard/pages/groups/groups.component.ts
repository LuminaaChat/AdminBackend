import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {
  DeleteTenantModalComponent
} from "../tenants/components/delete-tenant-modal/delete-tenant-modal.component";
import {EditTenantPanelComponent} from "../tenants/components/edit-tenant-panel/edit-tenant-panel.component";
import {NewTenantPanelComponent} from "../tenants/components/new-tenant-panel/new-tenant-panel.component";
import {RolePipe} from "../../../shared/pipes/role.pipe";
import {VisiblePipe} from "../../../shared/pipes/visible.pipe";
import {Group} from "../../../shared/types/group.type";
import {NewGroupPanelComponent} from "./components/new-group-panel/new-group-panel.component";
import {EditGroupPanelComponent} from "./components/edit-group-panel/edit-group-panel.component";
import {DeleteGroupModalComponent} from "./components/delete-group-modal/delete-group-modal.component";
import {PaginationComponent} from "../../../shared/components/pagination/pagination.component";
import {Tenant} from "../../../shared/types/tenant.type";
import {GroupsApiService} from "../../../shared/api/groups-api.service";
import {NotificationsService} from "../../../shared/services/notifications.service";
import {Notification} from "../../../shared/types/notification.type";
import {DivisionPipe} from "../../../shared/pipes/division.pipe";

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    DeleteTenantModalComponent,
    EditTenantPanelComponent,
    NewTenantPanelComponent,
    RolePipe,
    VisiblePipe,
    NewGroupPanelComponent,
    EditGroupPanelComponent,
    DeleteGroupModalComponent,
    PaginationComponent,
    DivisionPipe
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent  implements OnInit {
  showNewGroupPanel: boolean = false;
  showEditGroupPanel: boolean = false;
  showDeleteGroupModal: boolean = false;

  groups: WritableSignal<Group[]> = signal<Group[]>([]);
  selectedGroup: WritableSignal<Group> = signal<Group>({} as Group);

  constructor(private groupApi: GroupsApiService,
              private notify: NotificationsService,) {
  }

  onClickCloseNewGroupPanel(event: Group | null) {
    if (event)
      this.groupApi.create( event as Group ).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Gruppe angelegt!',
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
    this.showNewGroupPanel = false;
  }

  onClickCloseEditGroupPanel(event: {group: Group | null, showPanel: boolean}) {
    if (event.group)
      this.groupApi.update(event.group?._id, event.group).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Bearbeitet!',
            message: `Die Gruppe ${event.group?.name} wurde erfolgreich bearbeitet.`,
            type: 'success'
          } as Notification)
          this.selectedGroup.set({} as Group);
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
    this.showEditGroupPanel = event.showPanel;
  }

  onClickCloseDeleteGroupModal(event: Group | null) {
    if (event)
      this.groupApi.delete(event._id).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Gelöscht!',
            message: `Gruppe (${event.name} wurde erfolgreich gelöscht.`,
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
    this.selectedGroup.set({} as Group);
    this.showDeleteGroupModal = false;
  }

  onClickAddGroup() {
    this.showNewGroupPanel = true;
  }

  onClickEditGroup(group: Group) {
    this.selectedGroup.set(group);
    this.showEditGroupPanel = true;
  }

  onClickDeleteGroup(group: Group) {
    this.selectedGroup.set(group);
    this.showDeleteGroupModal = true;
  }

  getFromApi() {
    this.groupApi.getList().subscribe({
      next: (data: Group[]) => {
        this.groups.set(data);
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

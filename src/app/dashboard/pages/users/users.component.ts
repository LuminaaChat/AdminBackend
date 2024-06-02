import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {User} from "../../../shared/types/user.type";
import {RolePipe} from "../../../shared/pipes/role.pipe";
import {VisiblePipe} from "../../../shared/pipes/visible.pipe";
import {NewUserPanelComponent} from "./components/new-user-panel/new-user-panel.component";
import {EditUserPanelComponent} from "./components/edit-user-panel/edit-user-panel.component";
import {DeleteUserModalComponent} from "./components/delete-user-modal/delete-user-modal.component";
import {PaginationComponent} from "../../../shared/components/pagination/pagination.component";
import {UsersApiService} from "../../../shared/api/users-api.service";
import {AuthApiService} from "../../../shared/api/auth-api.service";
import {AppStoreService} from "../../../shared/service/app-store.service";
import {DatePipe} from "@angular/common";
import {RolesArrayPipe} from "../../../shared/pipes/roles-array.pipe";
import {NotificationsService} from "../../../shared/services/notifications.service";
import {Notification} from "../../../shared/types/notification.type";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RolePipe,
    VisiblePipe,
    NewUserPanelComponent,
    EditUserPanelComponent,
    DeleteUserModalComponent,
    PaginationComponent,
    DatePipe,
    RolesArrayPipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  showNewUserPanel: boolean = false;
  showEditUserPanel: boolean = false;
  showDeleteUserModal: boolean = false;

  users: WritableSignal<User[]> = signal<User[]>([]);
  selectedUser: WritableSignal<User | null> = signal<User | null>(null);

  error: WritableSignal<string | null> = signal<string | null>(null);

  constructor(private usersApi: UsersApiService,
              private authApi: AuthApiService,
              private notify: NotificationsService,
              public appStore: AppStoreService) {
  }

  onClickCloseNewUserPanel(event: User | null) {
    if (event)
      this.authApi.register(
        event.email,
        event.password,
        event.firstName,
        event.lastName,
        event.roles
      ).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Benutzer angelegt!',
            message: `${event.firstName} ${event.lastName} wurde erfolgreich angelegt.`,
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
    this.showNewUserPanel = false;
  }

  onClickCloseEditUserPanel(event: User | null) {
    if (event)
      this.usersApi.update(event._id, event).subscribe({
        next: () => {
          this.notify.newNotification({
            title: 'Bearbeitet!',
            message: `Der Benutzer ${event.firstName} ${event.lastName} wurde erfolgreich bearbeitet.`,
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
    this.selectedUser.set(null);
    this.showEditUserPanel = false;
  }

  onClickCloseDeleteUserModal(event: User | null) {
    if (event)
      this.usersApi.delete(event._id).subscribe({
        next: (data: User) => {
          this.notify.newNotification({
            title: 'Gelöscht!',
            message: `Benutzer (${event.firstName} ${event.lastName}) wurde erfolgreich gelöscht.`,
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
    this.selectedUser.set(null);
    this.showDeleteUserModal = false;
  }

  onClickAddUser() {
    this.showNewUserPanel = true;
  }

  onClickEditUser(user: User) {
    this.selectedUser.set(user);
    this.showEditUserPanel = true;
  }

  onClickDeleteUser(user: User) {
    this.selectedUser.set(user);
    this.showDeleteUserModal = true;
  }

  getFromApi() {
    this.usersApi.getList().subscribe({
      next: (data: User[]) => {
        this.users.set(data);
      },
      error: (error) => {

        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.getFromApi();
  }
}

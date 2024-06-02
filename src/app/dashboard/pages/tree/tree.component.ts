import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RolePipe} from "../../../shared/pipes/role.pipe";
import {VisiblePipe} from "../../../shared/pipes/visible.pipe";
import {Tenant} from "../../../shared/types/tenant.type";
import {TenantsApiService} from "../../../shared/api/tenants-api.service";
import {Notification} from "../../../shared/types/notification.type";
import {NotificationsService} from "../../../shared/services/notifications.service";
import {Group} from "../../../shared/types/group.type";
import {data} from "autoprefixer";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-tree',
  standalone: true,
    imports: [
        RolePipe,
        VisiblePipe
    ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent implements OnInit {
  divisions: WritableSignal<Tenant[]> = signal<Tenant[]>([]);

  constructor(private divisionsApi: TenantsApiService,
              private notify: NotificationsService,) {
  }

  getDivisionsFromApi() {
    this.divisionsApi.getList().subscribe({
      next: (data: Tenant[]) => {
        this.divisions.set(data);
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
    this.getDivisionsFromApi();
  }
}

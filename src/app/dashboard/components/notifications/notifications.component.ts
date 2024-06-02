import { Component } from '@angular/core';
import {NotificationsService} from "../../../shared/services/notifications.service";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  constructor(public notifyService: NotificationsService) {}
}

import {Injectable, signal, WritableSignal} from '@angular/core';
import {Notification} from "../types/notification.type";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifications: WritableSignal<Notification[]> = signal<Notification[]>([]);

  constructor() {
  }

  public newNotification(notification: Notification): void {
    const notifications = this.notifications();
    notification.timer = notification.timer || 5000;
    notification.timeout = setTimeout(() => {
      this.removeNotification(notification);
    }, notification.timer);
    notifications.push(notification);
    this.notifications.set(notifications);
  }

  public getNotifications(): WritableSignal<Notification[]> {
    return this.notifications;
  }

  private removeNotification(notification: Notification): void {
    const notifications = this.notifications();
    const index = notifications.indexOf(notification);
    if (index > -1) {
      notifications.splice(index, 1);
      this.notifications.set(notifications);
    }
  }
}

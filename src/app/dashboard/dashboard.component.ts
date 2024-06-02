import { Component } from '@angular/core';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HeadBarComponent} from "./components/head-bar/head-bar.component";
import {RouterOutlet} from "@angular/router";
import {NotificationsComponent} from "./components/notifications/notifications.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavigationComponent,
    HeadBarComponent,
    RouterOutlet,
    NotificationsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebar: boolean = false;

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
}

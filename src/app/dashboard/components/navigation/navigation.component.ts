import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() sidebar: boolean = false;
  @Output() closeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>()

  onClickCloseSidebar() {
    this.closeSidebar.emit(false);
  }
}

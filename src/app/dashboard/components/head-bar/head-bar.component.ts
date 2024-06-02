import {Component, EventEmitter, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {AppStoreService} from "../../../shared/service/app-store.service";

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css'
})
export class HeadBarComponent {
  @Output() openSidebar: EventEmitter<boolean> = new EventEmitter<any>()

  userMenu: boolean = false;

  constructor(public appStore: AppStoreService) {
  }

  onClickUserMenu() {
    this.userMenu = !this.userMenu;
  }

  async onClickLogout() {
    this.userMenu = false;
    await this.appStore.logout()
  }


  onClickOpenSidebar() {
    this.openSidebar.emit(true);
  }
}

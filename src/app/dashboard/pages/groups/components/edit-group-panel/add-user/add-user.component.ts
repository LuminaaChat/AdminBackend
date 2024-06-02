import {Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal} from '@angular/core';
import {User} from "../../../../../../shared/types/user.type";
import {UsersApiService} from "../../../../../../shared/api/users-api.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  @Input() title: string = '';
  @Input() show: boolean = false;
  @Output() onClickClosePanel: EventEmitter<boolean> = new EventEmitter<boolean>();
  users: WritableSignal<User[]> = signal<User[]>([]);

  constructor(private usersApi: UsersApiService) {
  }

  onClickClose() {
    this.show = false;
    this.onClickClosePanel.emit(false);
  }

  ngOnInit(): void {
    this.usersApi.getList().subscribe({
      next: (users: User[]) => {
        this.users.set(users);
      }
    });
  }
}

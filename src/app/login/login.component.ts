import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppStoreService} from "../shared/service/app-store.service";
import {AuthApiService} from "../shared/api/auth-api.service";
import {User} from "../shared/types/user.type";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loadingState: boolean = false;
  errorState: boolean = false;

  email: string = '';
  password: string = '';

  constructor(private router: Router,
              private appStore: AppStoreService,
              private authApiService: AuthApiService) {
  }

  async onClickLogin() {
    this.errorState = false;
    this.loadingState = true;

    this.authApiService.login(this.email, this.password).subscribe({
      next: async (user: { user: User, token: string }) => {
        this.appStore.setToken(user.token);
        this.appStore.setUser(user.user);

        await this.router.navigate(['/dashboard']);

        this.loadingState = false;
        this.email = '';
        this.password = '';
      },
      error: (err) => {
        console.log(err);
        this.loadingState = false;
        this.errorState = true;
      }
    });






  }

}

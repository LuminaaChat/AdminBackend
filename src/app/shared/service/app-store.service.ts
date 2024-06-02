import {Injectable, signal, WritableSignal} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  private userData: WritableSignal<User | null> = signal(null);

  constructor(private router: Router) {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.userData.set(JSON.parse(userData) as User);
    }
  }

  async logout(): Promise<void> {
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    this.userData.set(null);
    await this.router.navigate(['../login']);
  }

  // Token
  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  unsetToken(): void {
    localStorage.removeItem('token');
  }

  // Server URL

  // User
  getUserId(): string {
    return this.userData()!._id;
  }

  hasUserRole(role: string): boolean {
    return this.userData()!.roles.includes(role);
  }

  getUserName(): {firstName: string, lastName: string} {
    return {
      firstName: this.userData()!.firstName,
      lastName: this.userData()!.lastName
    };
  }

  setUser(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.userData.set(user);
  }

}

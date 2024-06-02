import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AppStoreService} from "../service/app-store.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const result = inject(AppStoreService).hasToken();

  if (!result) {
    console.log('[Auth Guard] User is not login. Redirect to login page. ', result)
    router.navigate(['/login']);
    return false;
  }

  return true;
};

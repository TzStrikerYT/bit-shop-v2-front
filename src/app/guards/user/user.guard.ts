import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/api/users/user.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)
  const userService = inject(UserService)

  if (userService.isLoggedIn()) return true

  router.navigate(['/login'])
  return false
};
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/api/users/user.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {

  const router = new Router()
  const userService = inject(UserService)

  

  router.navigate(['/login'])
  return false
};
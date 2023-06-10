import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/api/users/user.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService)
  const router = inject(Router)

  let decoded = userService.decodeToken()

  if(decoded && decoded.role === 'admin') return true
  
  router.navigate(['/home'])
  return false;
};

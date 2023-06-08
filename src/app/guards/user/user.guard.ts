import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {

  const router = new Router()
  let st = localStorage.getItem('token')
  
  if(st) return true;
  router.navigate(['/login'])
  return false
};

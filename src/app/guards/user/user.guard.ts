import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {

  const router = new Router()
  let st = 2
  
  if(st === 1) return isLoggedIn();
  router.navigate(['/login'])
  return false
};

const isLoggedIn = () => {
  console.log(localStorage.getItem('token'))
  return localStorage.getItem('token') ? true : false
}

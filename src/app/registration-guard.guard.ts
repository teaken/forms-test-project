import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { selectAllInfo } from './store/selector/registration.selector';

@Injectable()
export class RegistrationGuardGuard implements CanActivate {
  constructor(private store: Store<AppState>,private router: Router){
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {
      this.store.select(selectAllInfo).subscribe(
        (result) => {
          if(Object.keys(result).length  == 0 ){
            this.router.navigate(['client-form/client'])
          }
        }
      )
    return true;
  }
  
}

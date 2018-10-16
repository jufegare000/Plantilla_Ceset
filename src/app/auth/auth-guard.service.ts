import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    if (this.loginService.esSesionIniciada()) {
      if (url == "/inicio" || url == "/") {
        let navigationExtrasProf: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        let redirect = '';
        const rol = +this.loginService.obtenerIdRolAutenticado();
        // Según el rol se hace una redirección
        switch (rol) {
          case 1:
            redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/administrador';
            break;
          case 2:

            break;
          case 3:

            break;
          case 4:
 
            break;
          case 5:
            
            break;
        }
        this.router.navigate([redirect], navigationExtrasProf);
        return false;
      }
      return true;
    }

    // Store the attempted URL for redirecting
    // this.loginService.redirectUrl = url;

    // Create a dummy session id
    let navigationExtrasProf: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    // Se verifica si la ruta es /inicio o / para que no haga la redirección
    if (url != "/inicio" && url != "/") {
      // Navigate to the home page with extras
      this.router.navigate(['/inicio'], navigationExtrasProf);
      return false;
    }else{

    }
    return true;
  }
}

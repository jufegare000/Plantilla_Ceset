import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from '../../auth/login.service';
import { MatSidenav } from '@angular/material';
import { Menu } from '../../modelos/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  nombre_usuario: string;
  @ViewChild('sidenav') sidenav: MatSidenav;
  menuActivo: Menu;
  @Input() listaMenu: Menu[];

  private _mobileQueryListener: () => void;

  constructor(private loginService: LoginService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    // Si la resolución es menos de 600px entonces cierra el sidenav
    if (this.mobileQuery.matches) {
      this.sidenav.opened = false;
    } else {
      this.sidenav.opened = true;
    }
    // Se autoselecciona el primer item de la lista de menú
    this.menuActivo = this.listaMenu[0];
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  cambiarMenu(menuId: number) {
    this.menuActivo = this.listaMenu[menuId - 1];
  
  // Si la resolución es de dispositivo móvil cuando da clic en el menú, este se cierra
  if(this.mobileQuery.matches) {
    this.sidenav.opened = false;
  }
}

}

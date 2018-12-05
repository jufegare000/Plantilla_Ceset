import { Component, OnInit, ChangeDetectorRef, Output } from '@angular/core';
import { RolService } from '../../servicios/rol.service';
import { Rol } from '../../modelos/rol';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from '../../auth/login.service';
import { Router } from '@angular/router';
import { ActivityService } from '../../servicios/activity.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mobileQuery: MediaQueryList;

  hideActivityList: boolean;
  hideCohortList: boolean;
  hideOther: boolean;

  closedNotification: boolean;
  openedNotification: boolean;
  toggledNotification: boolean;

  scrollShowed: boolean;

  private _mobileQueryListener: () => void;

  constructor(public loginService: LoginService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private rolSs: RolService, private router: Router, private activityService: ActivityService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    console.log(this.mobileQuery.matches);

    this.closedNotification = true;
    this.openedNotification = false;
    this.toggledNotification = false;

    this.rolSs.getAll()
    .subscribe(listaRoles => {
      activityService.roles = listaRoles;
    }, error =>{
      activityService.error += error;
    });
  }

  getActivity(event?: any) {
    console.log(event, 'Holiwis', this.roles, this.activityService.roles);
  }

  ngOnInit() {
    this.hideActivityList = true;
    this.hideCohortList = true;
    this.hideOther = true;
  }
  toggleNotification() {
    this.openedNotification = !this.openedNotification;
    this.toggledNotification = true;
  }

  openNot() {
    this.openedNotification = true;
  }

  closeNotification() {
    this.openedNotification = (!this.toggledNotification);
  }

  ngDoCheck() {
    this.scrollShowed = document.getElementById('content').clientHeight < document.getElementById('content').scrollHeight;
  }

  ngAfterViewInit() {

  }

  array = [,,,,,,,,,,,,,,,,,,,,,,];

  show(component: number): void {
    switch(component) {
      case 0:
        this.hideActivityList = false;
        this.hideCohortList = true;
        this.hideOther = true;
        break;
      case 1:
        this.hideActivityList = true;
        this.hideCohortList = false;
        this.hideOther = true;
        break;
      case 2:
        this.hideActivityList = true;
        this.hideCohortList = true;
        this.hideOther = false;
        break;
      default:
        break;
    }
  }

  toggleDrawer(drawer) : void {
    drawer.opened ? drawer.toggle() : null;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  roles: Rol[];
  rol: Rol;
  error: any;

}

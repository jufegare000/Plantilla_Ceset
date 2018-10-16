import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';

import { CanDeactivateGuard }       from '../auth/can-deactive-guard.service';
import { SelectivePreloadingStrategy } from '../servicios/selective-preload-strategy.service';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }

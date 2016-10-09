import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SwitcherComponent } from './switcher/switcher.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: SwitcherComponent, pathMatch: 'full'},
      { path: 'switcher', component: SwitcherComponent },
      { path: 'cake-detail', component: CakeDetailComponent },
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

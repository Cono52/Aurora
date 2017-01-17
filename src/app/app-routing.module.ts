import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SwitcherComponent } from './switcher/switcher.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { ProfileComponent } from './profile/profile.component'
import { FileUploadComponent } from './file-uploader/file-uploader.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: SwitcherComponent, pathMatch: 'full'},
      { path: 'switcher', component: SwitcherComponent },
      { path: 'cake-detail', component: CakeDetailComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'file-uploader', component: FileUploadComponent }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

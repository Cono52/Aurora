import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { CakeData, UserData }  from './in-memory-data.service';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { MdModule } from './md.module';
// App is our top level component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SwitcherComponent } from './switcher/switcher.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

import { CakesService } from './cakes.service'

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavComponent,
    SwitcherComponent,
    CakeDetailComponent,
    ProfileComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(CakeData, UserData),
    MdModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    CakesService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}

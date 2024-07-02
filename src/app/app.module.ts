import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsComponent } from './events/events.component';
import { CareerComponent } from './career/career.component';
import { Alumni1Component } from './alumni1/alumni1.component';
import { Alumni2Component } from './alumni2/alumni2.component';
import { Career1Component } from './career1/career1.component';
import { Career2Component } from './career2/career2.component';
import { Events1Component } from './events1/events1.component';
import { Events2Component } from './events2/events2.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Stories1Component } from './stories1/stories1.component';
import { Stories2Component } from './stories2/stories2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlumniComponent,
    StoriesComponent,
    EventsComponent,
    CareerComponent,
    Alumni1Component,
    Alumni2Component,
    Career1Component,
    Career2Component,
    Events1Component,
    Events2Component,
    Home1Component,
    Home2Component,
    Stories1Component,
    Stories2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

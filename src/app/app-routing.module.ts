import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { Career2Component } from './career2/career2.component';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { Alumni1Component } from './alumni1/alumni1.component';
import { Alumni2Component } from './alumni2/alumni2.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'career', component: CareerComponent },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'alumni',
    component: AlumniComponent,
  },
  {
    path: 'alumni1',
    component: Alumni1Component,
  },
  {
    path: 'alumni2',
    component: Alumni2Component,
  },
  { path: 'career2', component: Career2Component },
  { path: 'events', component: EventsComponent },
  { path: '**', redirectTo: 'career', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

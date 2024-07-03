import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { Alumni1Component } from './alumni1/alumni1.component';
import { Alumni2Component } from './alumni2/alumni2.component';

const routes: Routes = [
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
  {
    path: `**`,
    redirectTo: `home`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

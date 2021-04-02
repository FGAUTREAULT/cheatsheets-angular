import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'topic', loadChildren: 'app/home/topic-details/topic-details.module#TopicDetailsModule',
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

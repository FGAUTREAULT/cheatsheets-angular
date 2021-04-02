import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TopicDetailsComponent } from './topic-details.component';

const routes: Routes = [
  {
    path: '', component: TopicDetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class TopicDetailsRoutingModule { }

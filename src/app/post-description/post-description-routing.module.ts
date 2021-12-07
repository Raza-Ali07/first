import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDescriptionPage } from './post-description.page';

const routes: Routes = [
  {
    path: '',
    component: PostDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDescriptionPageRoutingModule {}

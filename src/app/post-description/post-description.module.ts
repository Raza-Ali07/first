import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostDescriptionPageRoutingModule } from './post-description-routing.module';

import { PostDescriptionPage } from './post-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostDescriptionPageRoutingModule
  ],
  declarations: [PostDescriptionPage]
})
export class PostDescriptionPageModule {}

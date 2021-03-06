import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

@NgModule({
  declarations: [FolderPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FolderPageRoutingModule
  ],
  exports: [
    FolderPageRoutingModule
  ]
})
export class FolderPageModule { }

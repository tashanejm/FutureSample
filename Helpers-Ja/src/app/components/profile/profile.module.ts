import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {AvatarModule} from "primeng/avatar";
import {TranslateModule} from "@ngx-translate/core";
import {TooltipModule} from "primeng/tooltip";
import {OverlayPanelModule} from "primeng/overlaypanel";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    TranslateModule,
    TooltipModule,
    OverlayPanelModule
  ]
})
export class ProfileModule { }

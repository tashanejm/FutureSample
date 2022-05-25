import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {ProfileModule} from "../profile/profile.module";
import {NavigationMenuModule} from "../common/navigation-menu/navigation-menu.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProfileModule,
    NavigationMenuModule
  ]
})
export class HeaderModule {
}

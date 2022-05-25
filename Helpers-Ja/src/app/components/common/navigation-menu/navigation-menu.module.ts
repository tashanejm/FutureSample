import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu.component';



@NgModule({
  declarations: [
    NavigationMenuComponent
  ],
  exports: [
    NavigationMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationMenuModule { }

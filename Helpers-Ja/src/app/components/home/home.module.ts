import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { TranslateModule } from '@ngx-translate/core';
import {SearchCriteriaModule} from "../common/search-criteria/search-criteria.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonModule,
        RippleModule,
        TranslateModule,
        SearchCriteriaModule,
        MatProgressBarModule
    ]
})
export class HomeModule { }

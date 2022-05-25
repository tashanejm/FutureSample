import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCriteriaComponent } from './search-criteria.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SearchCriteriaService } from './search-criteria.service';
import { HttpClientModule } from '@angular/common/http';
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
    declarations: [
        SearchCriteriaComponent
    ],
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
    exports: [
        SearchCriteriaComponent
    ],
    providers: [
        SearchCriteriaService
    ]
})
export class SearchCriteriaModule { }

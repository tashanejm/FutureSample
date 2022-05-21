import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCriteriaComponent } from './search-criteria.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SearchCriteriaService } from './search-criteria.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchCriteriaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule,
    HttpClientModule
  ],
  providers: [
    SearchCriteriaService
  ]
})
export class SearchCriteriaModule { }

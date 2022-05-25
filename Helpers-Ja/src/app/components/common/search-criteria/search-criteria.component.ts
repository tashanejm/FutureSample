import { Component, OnInit } from '@angular/core';
import { SearchCriteriaService } from './search-criteria.service';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {
  public baseForm!: FormGroup;
  constructor(private readonly searchService: SearchCriteriaService,
              private readonly formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  public onSearch(event?: KeyboardEvent | MouseEvent): void {
    if (this.baseForm.valid && (event instanceof MouseEvent || event?.keyCode === 13)) {
      console.log('search')
      this.searchService.queryMockData$?.subscribe();
    }
  }

  private initFormGroup(): void {
    this.baseForm = this.formBuilder.group({
      input: [{value: null, disabled: false}, Validators.required]
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { SearchCriteriaService } from './search-criteria.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private readonly searchService: SearchCriteriaService) { }

  ngOnInit(): void {
  }

  public onSearch(): void {
    
  }
}

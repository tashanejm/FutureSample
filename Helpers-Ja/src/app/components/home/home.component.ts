import { Component, OnInit } from '@angular/core';
import {SearchCriteriaService} from "../common/search-criteria/search-criteria.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly searchCriteriaService: SearchCriteriaService) { }

  ngOnInit(): void {
  }

  public get loading(): boolean {
    return this.searchCriteriaService.loading;
  }
}

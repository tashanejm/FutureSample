import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseCrudService } from '../base/service/base-crud.service';
import { BaseService } from '../base/service/base.service';

@Injectable()
export class SearchCriteriaService extends BaseCrudService {

  constructor(private readonly httpClient: HttpClient) {
    super();
  }
   

  public queryMockData(): Observable<any[]> {

  }
}

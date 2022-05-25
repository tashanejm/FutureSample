import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseCrudService } from '../base/service/base-crud.service';
import { BaseService } from '../base/service/base.service';

@Injectable()
export class SearchCriteriaService extends BaseCrudService<any> {

  constructor(private readonly httpClient: HttpClient) {
    super();
  }


  public get queryMockData$(): Observable<any[]> {
    this.loadingBehaviorSubject.next(true);
    setTimeout(() => {
      console.log('loading completed')
      this.loadingBehaviorSubject.next(false);
    }, 5000);

    return undefined!;
  }
}

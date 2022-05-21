import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseService} from './base.service';

@Injectable()
export class BaseCrudService<T> extends BaseService {
  private readonly entities: BehaviorSubject<T[]>;
  // private readonly entity: BehaviorSubject<T>;

  constructor() {
    super();
    this.entities = new BehaviorSubject<T[]>([]);
    // this.entity = new BehaviorSubject<T>();
  }
}

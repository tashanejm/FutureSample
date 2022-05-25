import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BaseService} from './base.service';

@Injectable()
export class BaseCrudService<T> extends BaseService {
  protected readonly entities: BehaviorSubject<T[]>;
  protected readonly entity!: BehaviorSubject<T>;
  protected readonly loadingBehaviorSubject: BehaviorSubject<boolean>;

  constructor() {
    super();
    this.entities = new BehaviorSubject<T[]>([]);
    this.entity = new BehaviorSubject<T>(null!);
    this.loadingBehaviorSubject = new BehaviorSubject<boolean>(false);
  }

  public get loading$(): Observable<boolean> {
    return  this.loadingBehaviorSubject.asObservable();
  }

  public get loading(): boolean {
    return  this.loadingBehaviorSubject.value;
  }

}

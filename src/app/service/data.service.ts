import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public editDataDetails: boolean = false;
  public subject = new Subject<boolean>();
  private booleanSource = new BehaviorSubject(this.editDataDetails);
  currentBoolean = this.booleanSource.asObservable();

  booleanChange(bool: boolean) {
    this.booleanSource.next(bool);
  }
}

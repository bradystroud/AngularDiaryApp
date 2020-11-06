import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EntryListComponent } from './entry-list/entry-list.component';
import { Entry } from './entry';
@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private subject = new Subject<Entry[]>();

  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<Entry[]> {
    return this.subject.asObservable();
  }
}
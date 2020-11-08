import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entries = [
      // new Entry(10, "City trip", "I had a bad day today. I am unhappy about the condition of my day. If i could rectify the day i would.", 1),
      // new Entry(10, "#BadDayLol", "Today was a bit boring", 3),
      // new Entry(10, "What a day", "today was so flipping epic you dont even understand", 5),
      // new Entry(10, "I dont wanna talk about it ok just leave me alone", "I dont wanna talk about it lmao", 0)
    ];
    return {entries};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(entries: Entry[]): number {
    return entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 11;
  }
}
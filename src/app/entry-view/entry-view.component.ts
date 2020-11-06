import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.css']
})
export class EntryViewComponent implements OnInit {

  @Input()
  entry: Entry;
  moodList = [false, false, false, false, false];

  constructor() { }

  ngOnInit(): void {
    console.log("Entry mood: " + this.entry.mood.toString())
    for(let i = 0; i < this.entry.mood; i++) {
      console.log(this.moodList[i])
      this.moodList[i] = true;
    }
    console.log(this.moodList)
  }
  test () {
    console.log('Yeah Boiiiiiiiiiiiiiiiiii');
  }

}

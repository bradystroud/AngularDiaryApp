import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Entry } from '../entry'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntryListComponent } from '../entry-list/entry-list.component';
import { EntryService } from './../entry.service';

@Component({
  providers:[EntryListComponent],
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  private entriesURL = 'api/entries';  // URL to web api

  @Input()
  entryList: Entry[];

  title = "What happended today?";
  entry: Entry;
  moodName: string;
  retreiveEntries: Entry[];
  moodList = [
    { name: "Great", value: 1 },
    { name: "Good", value: 3 },
    { name: "Fine", value: 4 },
    { name: "Bad", value: 5 },
    { name: "I wanna go home", value: 6 }
  ]
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  body: string;
  constructor(private http: HttpClient, private entryService: EntryService) { }

  ngOnInit(): void {
  }

  postEntry(): Observable<Entry> {
    return this.http.post<Entry>(this.entriesURL, this.entry, this.httpOptions);
  }

  saveData() {
    this.entry = new Entry(0, this.title, this.body, this.moodList.find(mood => mood.name === this.moodName).value);
    // I need to learn whats going on with that === and => thing/
    this.postEntry().subscribe()
    this.entryList.push(this.entry);
    this.entryService.sendClickEvent();
  }
  //So here i need to somehow 'refresh' the list of Entries in the EntryList component, the best way might be to refresh page whole. 
}

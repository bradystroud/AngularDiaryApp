import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Entry } from '../entry'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  private entriesURL = 'api/entries';  // URL to web api

  title = "What happended today?";
  moodName: string;
  retreiveEntries: Entry[]; 
  moodList = [
    { name: "Great", value: 1 },
    { name: "Good", value: 3 },
    { name: "Fine", value: 4 },
    { name: "Bad", value: 5 },
    { name: "I wanna go home", value: 6 }
  ]


  body: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  getEntries(): Observable<Entry[]> {
    console.log(this.http.get<Entry[]>(this.entriesURL).subscribe(entries => this.retreiveEntries = entries))
    return this.http.get<Entry[]>(this.entriesURL)
  }

  saveData() {
    let entry = new Entry(0, this.title, this.body, this.moodList.find(mood => mood.name === this.moodName).value);
    // I need to learn whats going on with that === and => thing/
    this.getEntries();
    console.log(this.retreiveEntries)
    console.log(entry)
  }

}

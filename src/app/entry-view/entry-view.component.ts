import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';


@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.css']
})
export class EntryViewComponent implements OnInit {

  entry: Entry
  private entriesURL = 'api/entries';  // URL to web api
  entryList: Entry[];

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.getEntries();  
  }

  getEntries(): Observable<Entry[]> {
    this.http.get<Entry[]>(this.entriesURL).subscribe(entries => this.entryList = entries)
    return this.http.get<Entry[]>(this.entriesURL)
  }

}
